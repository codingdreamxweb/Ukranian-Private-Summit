"use client";

import Image from "next/image";
import Kateryna_Glazkova from "@/app/assets/img/speakers/Kateryna_Glazkova.jpg";
import Jacek_Chwedoruk from "@/app/assets/img/speakers/Jacek_Chwedoruk.jpg";
import Tatiana_Goncharenko from "@/app/assets/img/speakers/Tatiana_Goncharenko.jpg";
import Mikolaj_Firlej from "@/app/assets/img/speakers/Mikolaj_Firlej.jpg";
import Dmytro_Kuzmenko from "@/app/assets/img/speakers/Dmytro_Kuzmenko.jpg";
import Roman_Nikitov from "@/app/assets/img/speakers/Roman_Nikitov.jpg";
import Ruslan_Furtas from "@/app/assets/img/speakers/Ruslan_Furtas.jpg";
import Andriy_Kolodiuk from "@/app/assets/img/speakers/Andriy_Kolodiuk.jpg";
import Anna_Wnuk from "@/app/assets/img/speakers/Anna_Wnuk.jpeg";
import Barbara_Nowakowska from "@/app/assets/img/speakers/Barbara_Nowakowska.jpg";
import Lukasz_Wawak from "@/app/assets/img/speakers/Lukasz_Wawak.jpg";
import Anna_Zorya from "@/app/assets/img/speakers/Anna_Zorya.jpg";
import Lukasz_Gasiński from "@/app/assets/img/speakers/Lukasz_Gasiński.jpg";
import vector from "@/app/assets/img/speakers/vector.svg";
import arrow from "@/app/assets/img/arrow-blue.svg";

import { useState } from "react";
import localFont from 'next/font/local';

const myFont = localFont({src: '../../public/unbounded.ttf'});
const myFont2 = localFont({src: '../../public/mon.ttf'});

export default function Speakers({ id }) {

  const [showText, setShowText] = useState();

  const handleShowText = () => {
    setShowText(!showText);
  }

  const [currentStage, setCurrentStage] = useState(null);
  const handleStageClick = (stage) => {
    setCurrentStage(stage);
  }

  const SpeakersItem = ({ img, stage, title, subtitle, linkedin}) => {
    return (
      <div className="speakers__item">
        <Image className="speakers__item--speaker-img" src={img} alt="speakers picture" />
        <div className="speakers__item--text-container">
          <Image src={vector}></Image>
          <div className="speakers__item--text">
            <p className="stage">{stage}</p>
            <p className={myFont.className + ' ' + "name"}><a style={{textDecoration: 'none', color: 'inherit'}} href={linkedin}>{title}</a></p>
            <p className="subtitle">{subtitle}</p>
            {/* <div>
              <a href={linkedin} style={{display: 'flex', gap: 10, alignItems: 'center', textDecoration: 'none', color: '#035FCC', cursor: 'pointer'}}>
              Linkedin <Image width={12} style={{transform: 'rotate(-90deg)', width: 12}} src={arrow}></Image>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  };

  const gridItemData = [
    {
      img: Kateryna_Glazkova,
      stage: "Invest in UA business",
      title: "Kateryna Glazkova",
      subtitle: "SUP, CEO",
      linkedin: 'https://www.linkedin.com/in/kateryna-glazkova-b801102a6/',
    },
    {
      img: Jacek_Chwedoruk,
      stage: "M&A panel",
      title: "Jacek Chwedoruk",
      subtitle: "Rothschild & Co.”., Head of Rothschild & Co. Poland and Co-Head of Rothschild & Co. CEE",
      linkedin: 'https://www.linkedin.com/in/jacek-chwedoruk/',
    },
    {
      img: Tatiana_Goncharenko,
      stage: "Miltech in Ukraine",
      title: "Tatiana Goncharenko",
      subtitle: "Founders League, Founder",
      linkedin: 'https://www.linkedin.com/in/tetiana-honcharenko-91088023/',
    },
    {
      img: Mikolaj_Firlej,
      stage: "Miltech in Ukraine",
      title: "Mikolaj Firlej",
      subtitle: "Expedition Fund, Co-founder & GP",
      linkedin: 'https://www.linkedin.com/in/mikolaj-firlej-508b6a65/',
    },
    {
      img: Dmytro_Kuzmenko,
      stage: "UA Funds",
      title: "Dmytro Kuzmenko",
      subtitle: "UVCA, CEO",
      linkedin: 'https://www.linkedin.com/in/dmytro-kuzmenko-9027112a/',
    },
    {
      img: Roman_Nikitov,
      stage: "Venture Capital",
      title: "Roman Nikitov",
      subtitle: "ICU Ventures, Director",
      linkedin: 'https://www.linkedin.com/in/roman-nikitov-1b707b2/',
    },
    {
      img: Ruslan_Furtas,
      stage: "M&A panel",
      title: "Ruslan Furtas",
      subtitle: "Horizon Capital, Principal",
      linkedin: 'https://www.linkedin.com/in/ruslanfurtas/',
    },
    {
      img: Andriy_Kolodiuk,
      stage: "Fund of Funds",
      title: "Andriy Kolodyuk",
      subtitle: "UVCA, Chairman of the Board",
      linkedin: 'https://www.linkedin.com/in/andkol/',
    },
    {
      img: Anna_Wnuk,
      stage: "PE panel",
      title: "Anna Wnuk",
      subtitle: "PSIK, Managing director",
      linkedin: 'https://www.linkedin.com/in/anna-wnuk-b58583152/',
    },
    {
      img: Barbara_Nowakowska,
      stage: "Institutional investors",
      title: "Barbara Nowakowska",
      subtitle: "PSIK, Managing director",
      linkedin: 'https://www.linkedin.com/in/barbara-nowakowska-a0354a67/',
    },
    {
      img: Lukasz_Wawak,
      stage: "Venture Capital",
      title: "Lukasz Wawak",
      subtitle: "PUSB, General Manager",
      linkedin: 'https://www.linkedin.com/in/%C5%82ukasz-wawak-5a00b069/',
    },
    {
      img: Anna_Zorya,
      stage: "M&A panel",
      title: "Anna Zorya",
      subtitle: "Rymarz Zdort Maruta, attorney-at-law",
      linkedin: 'https://www.linkedin.com/in/anna-zorya-1a253320/',
    },
    {
      img: Lukasz_Gasiński,
      stage: "Welcome speech",
      title: "Dr hab. Lukasz Gasinski",
      subtitle: "Rymarz Zdort Maruta, Partner",
      linkedin: 'https://www.linkedin.com/in/%C5%82ukasz-gasi%C5%84ski-29419883/',
    },
  ];

  const stagesData = [...new Set(gridItemData.map((item) => item.stage))].map(stage => ({stage}));

  const filteredGridItems = currentStage ? gridItemData.filter((item) => item.stage === currentStage) : gridItemData;

  return (
    <section className={"container speakers"} id={id}>
      <h2 className={myFont.className}>Speakers</h2>
      <div className="speakers__buttons-container">
        <button 
        className={myFont2.className}
        onClick={() => setCurrentStage(null)}
      >All Speakers</button>
        {stagesData.map((item, key) => 
          <button 
            key={key}
            className={myFont2.className}
            onClick={() => handleStageClick(item.stage)}
          >{item.stage}</button>
        )}
      </div>
      <div className="speakers__grid-container">
        {!showText ? 
         (filteredGridItems.slice(0, 8).map((item, key) =>
          <SpeakersItem 
            key={key}
            img={item.img}
            stage={item.stage}
            title={item.title}
            subtitle={item.subtitle}
            linkedin={item.linkedin}
          />
         )) :
         (filteredGridItems.map((item, key) => 
          <SpeakersItem 
            key={key}
            img={item.img}
            stage={item.stage}
            title={item.title}
            subtitle={item.subtitle}
            linkedin={item.linkedin}
          />
         ))
        }
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
        <button className={myFont.className + ' ' + "button transparent-button"} onClick={() => handleShowText()}>
          {!showText ? 'See all' : 'Hide'}
          <div style={{transform: showText ? 'rotate(180deg)' : '', transition: 'all 0.3s'}}>
            <Image className={"arrow" + ' ' + (showText ? "arrow-down" : "arrow-up")} src={arrow} alt="arrow icon" />
          </div>
        </button>
      </div>
    </section>
  );
}
