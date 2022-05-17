import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", (req, res) => {
  prisma.feedback.create({
    data: {
      type: req.body.type,
      comment: req.body.comment,
      screenshot: req.body.screenshot,
    },
  });

  return res.send(`Hello World `);
});

app.listen(3333, () => {
  console.log(`HTTP server is running...`);
});
