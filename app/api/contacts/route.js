import { transporter } from "@/app/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {

  const data = await req.json();

  const { name, company, email, message, speakerAgreement, supportAgreement, promotionAgreement } = data;

  await transporter.sendMail(
    {
      from: email,
      to: "events@uvca.eu",
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
      } else {
        const message = `Email sent: ${info.response}`;
        console.log(message);

        transporter.sendMail ({
          from: 'events@uvca.eu',
          to: email,
          text: 'Thank you very much for your interest in participating in the Ukrainian PE&VC Summit. We have received your request and will contact you shortly to confirm.'
        });
        transporter.sendMail ({
          from: email,
          to: 'platform@uvca.eu',
          text: `
          Name: ${name}
          Email: ${email}
          Company: ${company}
          Message: ${message}
          Are you agree to participate at one of the panels as a speaker? ${speakerAgreement}
          Would you like to support the Summit as a sponsor, partner or in any other way? ${supportAgreement}
          Would you like to promote your company / organization during the Summit? ${promotionAgreement}
        `,
        });

        NextResponse.json({message: 'test'}, { status: 200 })
      }
    }
  );
  return NextResponse.json({ res });
}