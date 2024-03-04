const nodemailer = require("nodemailer");
// export const senderEmail = "events@uvca.eu";uvca@justmail.biz
export const senderEmail = "uvca@justmail.biz";
// export const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port : "465",
//   secure: true,
//   auth: {
//     user: senderEmail,
//     pass: "iapx sfve ocen vrvx"
//   }
// })


export const transporter = nodemailer.createTransport({
  host: "mail.justmail.biz",
  port : "587",
  secure: false,
  auth: {
    user: senderEmail,
    pass: "1241353wtafegszrbgse"
  }
})