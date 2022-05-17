import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

// MAIL PROVIDER
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b26234ed7ccf61",
    pass: "49054c5f45e8ab",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: `Feedget team <oi@feedget.com>`,
      to: `Alex Marques Alves <atanaelleonardo@gmail.com>`,
      subject,
      html: body,
    });
  }
}
