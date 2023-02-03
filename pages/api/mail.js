import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: {name: name, address:process.env.SMTP_USER },
      to: process.env.SMTP_USER,
      subject: `${subject}`,
      html: `<p>MSK sera iletişim formu mesajıdır.</p><br> 
        <p><strong>Konu: </strong> ${subject}</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Mesaj: </strong> ${message}</p><br>`,
      replyTo:email
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};