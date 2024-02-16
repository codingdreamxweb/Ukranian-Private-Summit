import { transporter } from "@/app/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {

  const data = await req.json();

  const { name, company, email, message, speakerAgreement, supportAgreement, promotionAgreement } = data;

  await transporter.sendMail(
    {
      from: email,
      to: "vyacheslav.k@dreamxweb.com",
      // to: "events@uvca.eu",
      text: `
          Name: ${name}
          Email: ${email}
          Company: ${company}
          Message: ${message}
          Are you agree to participate at one of the panels as a speaker? ${speakerAgreement}
          Would you like to support the Summit as a sponsor, partner or in any other way? ${supportAgreement}
          Would you like to promote your company / organization during the Summit? ${promotionAgreement}
        `,
    },
    function (error, info) {
      if (error) {
        console.log(error);
        NextResponse.json({message: 'test'}, { status: 500 })
        // res.status(500).json({ error: 'Error sending email' });
      } else {
        const message = `Email sent: ${info.response}`;
        console.log(message);

        transporter.sendMail ({
          from: 'events@uvca.eu',
          to: email,
          text: 'Thank you very much for your interest in participating in the Ukrainian PE&VC Summit. We have received your request and will contact you shortly to confirm.'
        });

        NextResponse.json({message: 'test'}, { status: 200 })
        // res.status(200).json({ message });
      }
    }
  );

  

  return NextResponse.json({ res });
}
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

// }
/////////////////////////////////////////////////////////////////////////////////////////////////////

"houy ughq jcei catn"