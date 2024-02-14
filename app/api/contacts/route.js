// import { transporter } from "@/app/lib/mailer";
// import { NextResponse } from "next/server";

// export async function POST(req, res) {

//   const data = await req.json();

//   const { name, company, email, message } = data;

//   await transporter.sendMail(
//     {
//       from: email,
//       to: "vyacheslav.k@dreamxweb.com",
//       text: `
//           Name: ${name}
//           Email: ${email}
//           Company: ${company}
//           Message: ${message}
//         `,
//     },
//     function (error, info) {
//       if (error) {
//         console.log(error);
//         res.status(500).send({ error });
//         // res.status(500).json({ error: 'Error sending email' });
//       } else {
//         const message = `Email sent: ${info.response}`;
//         console.log(message);
//         res.status(200).send(message);
//         // res.status(200).json({ message });
//       }
//     }
//   );

//   return NextResponse.json({ res });
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { senderEmail, transporter } from "@/app/lib/mailer";
// import { NextResponse } from "next/server";

// export async function POST(req, res) {

//     const data = await req.json();
//     const {name, email, message, company} = data;
//     const emailOwner = 'vyacheslav.k@dreamxweb.com';
//     const subjectAdmin = `${name}. Hire-Us form. DreamXWeb.com`;
//     const textAdmin = `
//         Name ${name}
//         Email: ${email}
//         Company: ${company}
//         Message: ${message}
//     `;
//     const subjectUser = `Dear ${name}. Thank you for your request. Dreamweb.com`;
//     const textUser = `Dear ${name}. Thank you for your request. Dreamweb.com`;
//     await new Promise((resolve, reject) => {

//         const sendMail = (to, subject, text, html ) => transporter.sendMail(
//             {
//                 from: email, to, subject, text, html
//             },
//             function (error, response) {
//                 if (error) {
//                     reject(error)
//                 } else {
//                     resolve(response)
//                 }
//             }
//         );
//         // send to user
//         // sendMail(email, subjectUser, textUser, );
//         // send to admin
//         sendMail(senderEmail, subjectAdmin, textAdmin);
//         //send to owner
//         sendMail(emailOwner, subjectAdmin, textAdmin);
//     })

//     return NextResponse.json({ res });
"houy ughq jcei catn"
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////

