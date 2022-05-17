import express from "express";
import nodemailer from "nodemailer";

export const routes = express.Router();

// MAIL PROVIDER
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b26234ed7ccf61",
    pass: "49054c5f45e8ab",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = "";

  await transport.sendMail({
    from: `Feedget team <oi@feedget.com>`,
    to: `Alex Marques Alves <atanaelleonardo@gmail.com>`,
    subject: `Novo Feedback`,
    html: [
      `<div style='font-family:sans-serif; font-size:16px; color:#111; ' >`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `<p>Screenshot: ${screenshot}</p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});
