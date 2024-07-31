import nodemailer from "nodemailer";

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}

export default async function sendEmail(options: EmailOptions) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "nestin.medicaps@gmail.com",
      pass: "cbpcphqmkllrocag",
    },
  });

  const message = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
    to: options.email,
    subject: "NestIn",
    html: options.message,
  };

  await transporter.sendMail(message);
}