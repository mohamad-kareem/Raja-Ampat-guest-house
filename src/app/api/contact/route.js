import nodemailer from "nodemailer";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const subject = body?.subject?.trim();
    const message = body?.message?.trim();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!process.env.CONTACT_EMAIL_USER || !process.env.CONTACT_EMAIL_PASS) {
      return Response.json(
        { error: "Email sender is not configured." },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL_TO) {
      return Response.json(
        { error: "Receiver email is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `"Raja Ampat Website" <${process.env.CONTACT_EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New Website Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1f2937; line-height: 1.7;">
          <div style="background: #0a4f6b; padding: 22px 26px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px;">New Contact Message</h2>
            <p style="margin: 6px 0 0; font-size: 14px;">Raja Ampat Website</p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-top: 0; padding: 24px 26px;">
            <p style="margin: 0 0 12px;">
              <strong>Name:</strong> ${safeName}
            </p>

            <p style="margin: 0 0 12px;">
              <strong>Email:</strong> ${safeEmail}
            </p>

            <p style="margin: 0 0 20px;">
              <strong>Subject:</strong> ${safeSubject}
            </p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

            <p style="margin: 0 0 8px;">
              <strong>Message:</strong>
            </p>

            <div style="background: #f9fafb; padding: 16px; border-radius: 8px; font-size: 15px;">
              ${safeMessage}
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    return Response.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
