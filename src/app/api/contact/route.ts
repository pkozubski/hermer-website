import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane." },
        { status: 400 },
      );
    }

    // Config for Cyberfolks SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to site owner
    const mailOptions = {
      from: process.env.SMTP_USER, // Cyberfolks requires this to match auth.user
      to: process.env.CONTACT_EMAIL || "kontakt@hermer.agency",
      subject: `Nowa wiadomość od ${name} z formularza kontaktowego Hermer`,
      text: `
Otrzymałeś nową wiadomość z formularza kontaktowego na stronie Hermer Agency.

Imię i Nazwisko: ${name}
Adres e-mail: ${email}

Wiadomość:
${message}
      `,
      html: `
        <h3>Nowa wiadomość z formularza kontaktowego</h3>
        <p><strong>Imię i Nazwisko:</strong> ${name}</p>
        <p><strong>Adres e-mail:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email, // This allows replying directly to the user who filled the form
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Wiadomość została wysłana pomyślnie." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Błąd wysyłania e-maila:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości." },
      { status: 500 },
    );
  }
}
