import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

// MAIL PROVIDER
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b26234ed7ccf61",
    pass: "49054c5f45e8ab",
  },
});

// FEEDBACKS ROUTE
app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: `Feedget team <oi@feedget.com>`,
    to: `Alex Marques Alves <atanaelleonardo@gmail.com>`,
    subject: `Novo Feedback`,
    html: [
      `<div style='font-family:sans-serif; font-size:16px; color:#111; ' >`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentario: ${comment}</p>`,
      `<p>Screenshot: ${screenshot}</p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log(`HTTP server is running...`);
});
