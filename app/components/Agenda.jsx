"use client";

import { useState } from "react";
import arrow from "@/app/assets/img/arrow-blue.svg";
import Image from "next/image";
import localFont from 'next/font/local';

const myFont = localFont({src: '../../public/unbounded.ttf'});

export default function Agenda({ id }) {
  const textData = [
    {
      time: "9.00",
      title: "Registration, welcome drink.",
      description: "",
      speakers: "",
    },
    {
      time: "9.30",
      title: "Welcome speech, introduction of partners and speakers.",
      description: (
        <>
          <span>
            Brief overview of the Ukrainian investment ecosystem and its current
            status; position of Polish government authorities regarding the
            supporting policy towards Ukraine.
          </span>
          <br />
          <span>
            How investors in Private Equity are involved (or can be involved) in
            the rebuilding of Ukraine.
          </span>
        </>
      ),
      speakers: <>
        <br/>
        <span>Andriy Kolodyuk, UVCA (moderator)</span><br/>
        <span>Pawel Rymarz, Rymarz Zdort Maruta</span><br/>
      </>,
    },
    {
      time: "10.00",
      title: "Institutional investors",
      description:
        "A brief overview of existing institutional funding programs for business and funds, investment protection and risk reduction (insurance, targeted funding, blended finance, etc.).",
      speakers: <>
      <br/>
        <span>Barbara Nowakowska, PSIK (moderator)</span><br/>
        <span>Joel Wajsberg, EIB</span><br/>
        <span>Piotr Matczuk, IFC</span><br/>
      </>,
    },
    {
      time: "10.45",
      title: "Private Equity (discussion)",
      description: (
        <>
          <span>
            Cases, trends, forecasts. Fundraising environment - predictions for the rest of 2024 Co-transactions with Ukrainian stakeholders. Post-war investment opportunities from a funds perspective.
          </span>
        </>
      ),
      speakers: <>
        <br />
        <span>Anna Wnuk, PSIK (moderator)</span><br />
        <span>Paweł Zdort, Rymarz Zdort Maruta</span>
      </>,
    },
    {
      time: "11.30",
      title: "Coffee break",
      description: "",
      speakers: "",
    },
    {
      time: "12.00",
      title: "How to properly invest in Ukrainian business during the war?",
      description:
        <>
          <span>Cases of success/ failed cases in business under martial law. Conclusions and best practices.</span>
        </>,
      speakers: "Kateryna Glazkova, SUP (moderator)",
    },
    {
      time: "12.40",
      title: " M&A (discussion)",
      description: (
        <>
          <span>Cases, trends, forecasts. Priority industries of interest for investments in Ukraine, opportunities for cooperation. Focus - M&A with EU businesses.</span>
        </>
      ),
      speakers: <>
      <br />
      <span>Anna Zorya, Rymarz Zdort Maruta (moderator)</span>
      <span>Jacek Chwedoruk, Rothschild & Co.</span><br />
      <span>Ruslan Furtas, Horizon Capital</span><br />
      </>,
    },
    {
      time: "13.20",
      title: "Venture Capital (discussion)",
      description:
        "Current situation, trends and opportunities. Is it the best moment to “buy a ticket”?",
      speakers: <>
      <br/>
      <span>Lukasz Wawak, Polish Ukrainian Startup Bridge (moderator)</span><br />
      <span>Roman Nikitov, ICU Ventures</span><br />
      
      </>,
    },
    {
      time: "14.00",
      title: "Lunch",
      description: "",
      speakers: "",
    },
    {
      time: "15.00",
      title: "Miltech in Ukraine. How to invest in miltech?",
      description: (
        <>
          <span>Would it be a driver industry for Ukraine's economy? Opportunities and threats, cases and trends.</span>
          <br />
        </>
      ),
      speakers: <>
        <br/>
        <span>Tatiana Goncharenko, Founders League (moderator)</span><br/>
        <span>Mikolaj Firlej, Expedition Fund</span>
      </>,
    },
    {
      time: "15.40",
      title: "Ukrainian Investment community",
      description:
        "Presentations of Ukrainian investment funds seeking for attracting investments from Polish and EU investors, their portfolio and strategies.",
      speakers: <>
      <br/>
      <span>Dmytro Kuzmenko, UVCA (moderator)</span>
      </>,
    },
    {
      time: "16.20",
      title: "Ukrainian Fund of Funds",
      description: (
        <>
          <span>Presentation of the Fund, its goal and strategy. GP’s and partners, how to join.</span>
          <br />
        </>
      ),
      speakers:<>
      <br />
      <span>Andriy Kolodyuk, AVentures Capital (moderator)</span>
      </>,
    },
    {
      time: "16.50",
      title: 'Wrapping up',
      description: `Closing remarks, "call to action".`,
      speakers: "",
    },
    {
      time: "17.00",
      title: "Networking and buffet.",
      description: "",
      speakers: "",
    },
  ];

  const Item = ({ time, title, description, speakers }) => {
    return (
      <div className="agenda__item">
        <div className="agenda__item--inner container">
          <div className="agenda__item--text-container left">
            <p className={myFont.className + ' ' + "time"}>{time}</p>
          </div>
          <div className="agenda__item--text-container right">
            <h3 className={myFont.className + ' ' + "title"}>{title}</h3>
            {description === "" ? null : (
              <p className="description">{description}</p>
            )}
            {speakers === "" ? null : (
              <p className="description">
                <span className={myFont.className + ' ' + "speaker"}>Speakers</span>: {speakers}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const [showText, setShowText] = useState();

  const handleShowText = () => {
    setShowText(!showText);
  }

  return (
    <section className="agenda" id={id}>
      {!showText ? 
        (textData.slice(0, 5).map((item, key) => (
          <Item
            key={key}
            time={item.time}
            title={item.title}
            description={item.description}
            speakers={item.speakers}
          />
        ))) :
        (textData.map((item, key) => (
          <Item
            key={key}
            time={item.time}
            title={item.title}
            description={item.description}
            speakers={item.speakers}
          />
        )))      
      }
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <button
          className={myFont.className + ' ' + "button transparent-button"}
          onClick={() => handleShowText()}
        >
          {!showText ? "See full timetable" : "Hide full timetable"}
          <div
            style={{
              transform: showText ? "rotate(180deg)" : "",
              transition: "all 0.3s",
            }}
          >
            <Image
              className={"arrow" + " " + (showText ? "arrow-down" : "arrow-up")}
              src={arrow}
              alt="arrow icon"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
