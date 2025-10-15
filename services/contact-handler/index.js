import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const {
  SMTP_HOST,
  SMTP_PORT = '465',
  SMTP_USER,
  SMTP_PASSWORD,
  CONTACT_TO_EMAIL = 'info@jointforcesk9.com',
  CONTACT_FROM_EMAIL,
  RECAPTCHA_ENTERPRISE_PROJECT_ID,
  RECAPTCHA_ENTERPRISE_KEY,
  RECAPTCHA_MIN_SCORE = '0.5',
} = process.env;

const app = express();
app.use(
  cors({
    origin: [
      'https://jointforcesk9.com',
      'https://www.jointforcesk9.com',
      'http://localhost:3000',
      'http://127.0.0.1:3000',
    ],
  }),
);
app.use(express.json());

const smtpPort = Number.parseInt(SMTP_PORT, 10);

const transporter =
  SMTP_HOST && SMTP_USER && SMTP_PASSWORD
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASSWORD,
        },
      })
    : undefined;

const recaptchaClient =
  RECAPTCHA_ENTERPRISE_PROJECT_ID && RECAPTCHA_ENTERPRISE_KEY
    ? new RecaptchaEnterpriseServiceClient()
    : undefined;

async function verifyRecaptchaToken(token) {
  if (!recaptchaClient) {
    console.warn(
      'reCAPTCHA Enterprise client not configured; skipping verification.',
    );
    return { ok: true, score: undefined };
  }

  try {
    const [assessment] = await recaptchaClient.createAssessment({
      parent: recaptchaClient.projectPath(RECAPTCHA_ENTERPRISE_PROJECT_ID),
      assessment: {
        event: {
          token,
          siteKey: RECAPTCHA_ENTERPRISE_KEY,
        },
      },
    });

    if (!assessment.tokenProperties?.valid) {
      return {
        ok: false,
        score: assessment.riskAnalysis?.score,
        reason: assessment.tokenProperties?.invalidReason,
      };
    }

    if (
      assessment.tokenProperties.action &&
      assessment.tokenProperties.action !== 'contact_form'
    ) {
      return {
        ok: false,
        score: assessment.riskAnalysis?.score,
        reason: `action mismatch: ${assessment.tokenProperties.action}`,
      };
    }

    return {
      ok: true,
      score: assessment.riskAnalysis?.score,
    };
  } catch (error) {
    console.error('Failed to verify reCAPTCHA Enterprise token', error);
    return { ok: false, score: undefined, reason: 'verification error' };
  }
}

app.post('/contact', async (req, res) => {
  try {
    if (!transporter) {
      console.error('SMTP transporter is not configured.');
      return res
        .status(500)
        .json({ error: 'Email service is not configured. Please try later.' });
    }

    const {
      name,
      email,
      phoneNumber,
      dogBreed,
      trainingType,
      message,
      recaptchaToken,
    } = req.body ?? {};

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !dogBreed ||
      !trainingType ||
      !message
    ) {
      return res.status(400).json({ error: 'Invalid form data.' });
    }

    if (!recaptchaToken) {
      return res
        .status(400)
        .json({ error: 'Verification failed. Please try again.' });
    }

    const verification = await verifyRecaptchaToken(recaptchaToken);
    const minScore = Number.parseFloat(RECAPTCHA_MIN_SCORE);

    if (
      !verification.ok ||
      (typeof verification.score === 'number' && verification.score < minScore)
    ) {
      console.warn('reCAPTCHA Enterprise verification failed', verification);
      return res
        .status(400)
        .json({ error: 'Verification failed. Please try again.' });
    }

    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phoneNumber}`,
      `Dog Breed: ${dogBreed}`,
      `Training Type: ${trainingType}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Dog Breed:</strong> ${dogBreed}</p>
        <p><strong>Training Type:</strong> ${trainingType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      </div>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: textBody,
      html: htmlBody,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Failed to send contact form email', error);
    res
      .status(500)
      .json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.get('/healthz', (_req, res) => {
  res.json({ ok: true });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Contact handler listening on port ${port}`);
});
