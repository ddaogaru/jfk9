import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(7),
  dogBreed: z.string().min(1),
  trainingType: z.string().min(1),
  message: z.string().min(10),
  recaptchaToken: z.string().optional(),
});

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  CONTACT_TO_EMAIL = "info@jointforcesk9.com",
  CONTACT_FROM_EMAIL,
  RECAPTCHA_ENTERPRISE_PROJECT_ID,
  RECAPTCHA_ENTERPRISE_KEY,
  RECAPTCHA_MIN_SCORE,
} = process.env;

const smtpPort = SMTP_PORT ? Number.parseInt(SMTP_PORT, 10) : 587;
const smtpSecure = Number.isFinite(smtpPort) && smtpPort === 465;

const transporter =
  SMTP_HOST && SMTP_USER && SMTP_PASSWORD
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: smtpPort,
        secure: smtpSecure,
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

async function verifyRecaptchaToken(token: string) {
  if (!recaptchaClient || !RECAPTCHA_ENTERPRISE_PROJECT_ID || !RECAPTCHA_ENTERPRISE_KEY) {
    return { ok: true, score: undefined };
  }

  try {
    const request = {
      assessment: {
        event: {
          token,
          siteKey: RECAPTCHA_ENTERPRISE_KEY,
        },
      },
      parent: recaptchaClient.projectPath(RECAPTCHA_ENTERPRISE_PROJECT_ID),
    };

    const [response] = await recaptchaClient.createAssessment(request);

    if (!response.tokenProperties?.valid) {
      console.warn(
        "reCAPTCHA Enterprise token invalid",
        response.tokenProperties?.invalidReason,
      );
      return { ok: false, score: response.riskAnalysis?.score };
    }

    if (
      response.tokenProperties.action &&
      response.tokenProperties.action !== "contact_form"
    ) {
      console.warn(
        "reCAPTCHA Enterprise action mismatch",
        response.tokenProperties.action,
      );
      return { ok: false, score: response.riskAnalysis?.score };
    }

    return { ok: true, score: response.riskAnalysis?.score };
  } catch (error) {
    console.error("Failed to verify reCAPTCHA Enterprise token", error);
    return { ok: false, score: undefined };
  }
}

export async function POST(request: Request) {
  try {
    if (!transporter) {
      console.error("SMTP configuration is missing. Unable to send email.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const payload = await request.json();
    const data = contactSchema.parse(payload);
    const { recaptchaToken, ...formData } = data;

    if (recaptchaClient) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "Verification failed. Please try again." },
          { status: 400 },
        );
      }

      const verification = await verifyRecaptchaToken(recaptchaToken);
      const minScore =
        RECAPTCHA_MIN_SCORE !== undefined
          ? Number.parseFloat(RECAPTCHA_MIN_SCORE)
          : 0.5;

      if (
        !verification.ok ||
        (typeof verification.score === "number" && verification.score < minScore)
      ) {
        console.warn("reCAPTCHA Enterprise verification failed", verification);
        return NextResponse.json(
          { error: "Verification failed. Please try again." },
          { status: 400 },
        );
      }
    }

    const subject = `New Contact Form Submission from ${formData.name}`;
    const fromAddress = CONTACT_FROM_EMAIL ?? SMTP_USER;
    const toAddress = CONTACT_TO_EMAIL ?? SMTP_USER;

    if (!fromAddress || !toAddress) {
      console.error("Sender or destination email is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const textBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phoneNumber}`,
      `Dog Breed: ${formData.dogBreed}`,
      `Training Type: ${formData.trainingType}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
        <p><strong>Dog Breed:</strong> ${formData.dogBreed}</p>
        <p><strong>Training Type:</strong> ${formData.trainingType}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    await transporter.sendMail({
      from: {
        name: "Joint Forces K9 Website",
        address: fromAddress,
      },
      to: toAddress,
      replyTo: {
        name: formData.name,
        address: formData.email,
      },
      headers: {
        "Reply-To": `${formData.name} <${formData.email}>`,
      },
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data.", issues: error.flatten() },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}

export const dynamic = "force-dynamic";
