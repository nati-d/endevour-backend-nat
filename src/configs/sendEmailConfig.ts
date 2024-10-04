import nodemailer from "nodemailer";
export interface Attachment {
  filename: string;
  path: string;
}

const sendEmailConfig = (
  sendTo: string | string[],
  subject: string,
  html: string,
  file?: Attachment[]
) => {
  const transporter = nodemailer.createTransport({
    host: "api.devidends.org",
    port: 465,
    secure: true,
    auth: {
      user: "opportunities@devidends.org",
      pass: "NewYear#2025?",
    },
  });

  return transporter.sendMail({
    from: "opportunities@devidends.org",
    to: sendTo,
    subject: subject,
    html: html,
    attachments: file,
  });
};

export default sendEmailConfig;
