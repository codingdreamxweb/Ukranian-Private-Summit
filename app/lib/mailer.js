const nodemailer = require("nodemailer");
export const senderEmail = "events@uvca.eu";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port : "465",
  secure: true,
  auth: {
    user: senderEmail,
    // pass: "houy ughq jcei catn",
    pass: "iapx sfve ocen vrvx"
  }
})


