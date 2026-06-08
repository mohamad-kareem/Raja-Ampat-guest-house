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

    const checkin = body?.checkin?.trim();
    const checkout = body?.checkout?.trim();
    const guests = body?.guests?.trim();
    const room = body?.room?.trim();
    const name = body?.name?.trim();
    const email = body?.email?.trim();

    if (!checkin || !checkout || !guests || !room || !name || !email) {
      return Response.json(
        { error: "Please fill in all booking fields." },
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

    const safeCheckin = escapeHtml(checkin);
    const safeCheckout = escapeHtml(checkout);
    const safeGuests = escapeHtml(guests);
    const safeRoom = escapeHtml(room);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    await transporter.sendMail({
      from: `"Raja Ampat Website" <${process.env.CONTACT_EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New Booking Request: ${room}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1f2937; line-height: 1.7;">
          <div style="background: #0a4f6b; padding: 22px 26px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px;">New Booking Request</h2>
            <p style="margin: 6px 0 0; font-size: 14px;">Raja Ampat Sandy Guest House</p>
          </div>

          <div style="border: 1px solid #e5e7eb; border-top: 0; padding: 24px 26px;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

            <p><strong>Check-in:</strong> ${safeCheckin}</p>
            <p><strong>Check-out:</strong> ${safeCheckout}</p>
            <p><strong>Guests:</strong> ${safeGuests}</p>
            <p><strong>Room Type:</strong> ${safeRoom}</p>
          </div>
        </div>
      `,
      text: `
New Booking Request

Name: ${name}
Email: ${email}

Check-in: ${checkin}
Check-out: ${checkout}
Guests: ${guests}
Room Type: ${room}
      `,
    });

    return Response.json(
      { success: true, message: "Booking request sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("BOOKING_API_ERROR:", error);

    return Response.json(
      { error: "Failed to send booking request. Please try again later." },
      { status: 500 },
    );
  }
}
