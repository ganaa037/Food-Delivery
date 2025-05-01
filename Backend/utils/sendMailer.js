import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  service: "gmail",
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendMail = async (email, subject, text) => {
  const info = {
    from: `food delivery<${process.env.EMAIL}>`,
    to: email,
    subject: subject,
    text: text,
  };
  try {
    return await transporter.sendMail(info);
  } catch (error) {
    return error;
  }
};
