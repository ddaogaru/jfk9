import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
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
  RECAPTCHA_SECRET_KEY,
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

    if (RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "Verification failed. Please try again." },
          { status: 400 },
        );
      }

      const googleResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret: RECAPTCHA_SECRET_KEY,
            response: recaptchaToken,
          }),
        },
      );

      if (!googleResponse.ok) {
        console.error(
          "reCAPTCHA verification request failed",
          googleResponse.status,
          await googleResponse.text(),
        );
        return NextResponse.json(
          { error: "Verification failed. Please try again later." },
          { status: 502 },
        );
      }

      const verification = (await googleResponse.json()) as {
        success: boolean;
        score?: number;
        action?: string;
        "error-codes"?: string[];
      };

      const minScore =
        RECAPTCHA_MIN_SCORE !== undefined
          ? Number.parseFloat(RECAPTCHA_MIN_SCORE)
          : 0.5;

      if (
        !verification.success ||
        (typeof verification.score === "number" && verification.score < minScore)
      ) {
        console.warn("reCAPTCHA verification failed", verification);
        return NextResponse.json(
          { error: "Verification failed. Please try again." },
          { status: 400 },
        );
      }
    }

    const subject = `New Contact Form Submission from ${formData.name}`;

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
      from: CONTACT_FROM_EMAIL || SMTP_USER,
      to: CONTACT_TO_EMAIL,
      replyTo: formData.email,
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
