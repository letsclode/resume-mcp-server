const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false, // true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail({ to, subject, text }) {
  const info = await transporter.sendMail({
    from: `hello@demomailtrap.com`,
    to,
    subject,
    text,
  });

  return info.messageId;
}

module.exports = sendEmail;
