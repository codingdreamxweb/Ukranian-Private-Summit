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
import Sandra_Golbreich from "@/app/assets/img/speakers/Sandra_Golbreich.jpg";
import Piotr_Matczuk from "@/app/assets/img/speakers/Piotr_Matczuk.jpg";
import Eliza_Kruczkowska from "@/app/assets/img/speakers/Eliza_Kruczkowska.jpg";
import Viktorija_Trimbel from "@/app/assets/img/speakers/Viktorija_Trimbel.jpg";
import Łukasz_Dziekoński from "@/app/assets/img/speakers/Łukasz_Dziekoński.jpg";
import Victor_Koptenkov from "@/app/assets/img/speakers/Victor_Koptenkov.jpg";
import Małgorzata_Bobrowska from "@/app/assets/img/speakers/Małgorzata_Bobrowska.jpg";
import Mikhal_Kramarz from "@/app/assets/img/speakers/Mikhal_Kramarz.jpeg";
import Rymarz_Paweł from "@/app/assets/img/speakers/Rymarz_Paweł.png";
import Keith_Chapman from "@/app/assets/img/speakers/Keith_Chapman.png";
import Karol_Tofil from "@/app/assets/img/speakers/Karol_Tofil.jpg";
import Iliya_Mihov from "@/app/assets/img/speakers/Iliya_Mihov.jpeg";
import Aziza_Zakhidova from "@/app/assets/img/speakers/Aziza_Zakhidova.jpg";
import Maksym_Kuznetsov from "@/app/assets/img/speakers/Maksym_Kuznetsov.jpg";
import Leszek_Muzyczyszyn from "@/app/assets/img/speakers/Leszek_Muzyczyszyn.jpg";
import Przemysław_Głębocki from "@/app/assets/img/speakers/Przemysław_Głębocki.jpeg";
import Andrii_Nosok from "@/app/assets/img/speakers/Andriy_Nosok.png";
import Paweł_Szreder from "@/app/assets/img/speakers/Paweł_Szreder.jpg";
import Jan_Erik_Saarinen from "@/app/assets/img/speakers/Jan_Erik_Saarinen.jpg";
import Denys_Gurak from "@/app/assets/img/speakers/Denys_Gurak.jpeg";
import Konstantin_Magaletskyi from "@/app/assets/img/speakers/Konstantin_Magaletskyi.jpg";
import Vitali_Laptenok from "@/app/assets/img/speakers/Vitali_Laptenok.jpg";
import Galyna_Isakiv from "@/app/assets/img/speakers/Galyna_Isakiv.JPG";
import Secret_Speaker from "@/app/assets/img/speakers/Secret_Speaker.jpg";
import Marek_Moravec from "@/app/assets/img/speakers/Marek_Moravec.jpg";


import vector from "@/app/assets/img/speakers/vector.svg";
import vector2 from "@/app/assets/img/speakers/vector2.svg";
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
          <Image src={vector2}></Image>
          <div className="speakers__item--text">
            <p className="stage">{stage}</p>
            <p className={myFont.className + ' ' + "name"}><a style={{textDecoration: 'none', color: 'inherit'}} href={linkedin}>{title}</a></p>
            <p className="subtitle">{subtitle}</p>
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
      subtitle: "Rothschild & Co., Head of Rothschild & Co. Poland and Co-Head of Rothschild & Co. CEE",
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
      img: Jan_Erik_Saarinen,
      stage: "Miltech in Ukraine",
      title: "Jan-Erik Saarinen",
      subtitle: "Double Tap Investments, Co-founder",
      linkedin: 'https://www.linkedin.com/in/janeriksaarinen/',
    },
    {
      img: Denys_Gurak,
      stage: "Miltech in Ukraine",
      title: "Denys Gurak",
      subtitle: "MITS Capital, Co-Founding Partner",
      linkedin: 'https://www.linkedin.com/in/denys-gurak/',
    },
    {
      img: Dmytro_Kuzmenko,
      stage: "UA Funds",
      title: "Dmytro Kuzmenko",
      subtitle: "UVCA, CEO",
      linkedin: 'https://www.linkedin.com/in/dmytro-kuzmenko-9027112a/',
    },
    {
      img: Konstantin_Magaletskyi,
      stage: "UA Funds",
      title: "Konstantin Magaletskyi",
      subtitle: "Green Recovery Fund/SD Capital, Co-Founder, Partner",
      linkedin: 'https://www.linkedin.com/in/magaletsky/',
    },
    {
      img: Vitali_Laptenok,
      stage: "UA Funds",
      title: "Vitali Laptenok",
      subtitle: "Flyer One Ventures, General Partner, Founder",
      linkedin: 'https://www.linkedin.com/in/vital-laptenok-57607a10/',
    },
    {
      img: Galyna_Isakiv,
      stage: "UA Funds",
      title: "Galyna Isakiv",
      subtitle: "SID Venture Partners, Head of Portfoilo & Operations",
      linkedin: 'https://www.linkedin.com/in/galyna-isakiv/',
    },
    {
      img: Roman_Nikitov,
      stage: "Wrap-up",
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
      stage: "Welcome speech",
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
      subtitle: "Rymarz Zdort Maruta, Partner, Head of Ukrainian Desk",
      linkedin: 'https://www.linkedin.com/in/anna-zorya-1a253320/',
    },
    {
      img: Andrii_Nosok,
      stage: "M&A panel",
      title: "Andrii Nosok",
      subtitle: "Dragon Capital, Partner, Managing Director",
      linkedin: 'https://www.linkedin.com/in/andrii-nosok-1450b32/',
    },
    {
      img: Paweł_Szreder,
      stage: "M&A panel",
      title: "Paweł Szrederk",
      subtitle: "Bain & Company, Partner, Partner",
      linkedin: 'https://www.linkedin.com/in/pawel-szreder/',
    },
    {
      img: Lukasz_Gasiński,
      stage: "Wrap-up",
      title: "Dr hab. Lukasz Gasinski",
      subtitle: "Rymarz Zdort Maruta, Partner",
      linkedin: 'https://www.linkedin.com/in/%C5%82ukasz-gasi%C5%84ski-29419883/',
    },
    {
      img: Sandra_Golbreich,
      stage: "Venture Capital",
      title: "Sandra Golbreich",
      subtitle: "Baltic Sandbox Ventures, General partner",
      linkedin: 'https://www.linkedin.com/in/sandra-golbreich/',
    },
    {
      img: Piotr_Matczuk,
      stage: "Institutional investors",
      title: "Piotr Matczuk",
      subtitle: "IFC, Country Head Poland",
      linkedin: 'https://www.linkedin.com/in/piotrmatczuk/',
    },
    {
      img: Eliza_Kruczkowska,
      stage: "Institutional investors",
      title: "Eliza Kruczkowska",
      subtitle: "PFR, Director of Innovation Development",
      linkedin: 'https://www.linkedin.com/in/elizakruczkowska/',
    },
    {
      img: Viktorija_Trimbel,
      stage: "Miltech in Ukraine",
      title: "Viktorija Trimbel",
      subtitle: "Coinvest Capital, Managing Director",
      linkedin: 'https://www.linkedin.com/in/viktorijatrimbel/',
    },
    {
      img: Łukasz_Dziekoński,
      stage: "Venture Capital",
      title: "Lukasz Dziekonski",
      subtitle: "Montis Capital, CEO and the Managing Partner",
      linkedin: 'https://www.linkedin.com/in/lukasz-dziekonski-331513/',
    },
    {
      img: Marek_Moravec,
      stage: "Venture Capital",
      title: "Marek Moravec",
      subtitle: "N1, Founder & Managing Director",
      linkedin: 'https://www.linkedin.com/in/marekmoravec/',
    },
    {
      img: Victor_Koptenkov,
      stage: "Invest in UA business",
      title: "Victor Koptenkov",
      subtitle: "D Art Logistic Ukraine, Co-founder",
      linkedin: 'https://www.linkedin.com/in/victor-koptenkov-5aba3944/',
    },
    {
      img: Małgorzata_Bobrowska,
      stage: "PE panel",
      title: "Małgorzata Bobrowska",
      subtitle: "Resource Partners, CEO and the Managing Partner",
      linkedin: 'https://www.linkedin.com/in/lukasz-dziekonski-331513/',
    },
    {
      img: Mikhal_Kramarz,
      stage: "Welcome speech",
      title: "Michal Kramarz",
      subtitle: "Google Campus, Head of Google for Startups CEE",
      linkedin: 'https://www.linkedin.com/in/mkramarz/',
    },
    {
      img: Rymarz_Paweł,
      stage: "Welcome speech",
      title: "Paweł Rymarz",
      subtitle: "Rymarz Zdort Maruta, Managing Partner",
      linkedin: 'https://www.linkedin.com/in/pawel-rymarz-4023a325/',
    },
    {
      img: Keith_Chapman,
      stage: "Welcome speech",
      title: "Keith Chapman",
      subtitle: "Freshfields Bruckhaus Deringer, Counsel",
      linkedin: 'https://www.linkedin.com/in/keith-chapman-freshfields/',
    },
    {
      img: Iliya_Mihov,
      stage: "Institutional investors",
      title: "Iliya Mihov",
      subtitle: "EIB, Equity Investment Officer",
      linkedin: 'https://www.linkedin.com/in/iliya-mihov-0b4a292/',
    },
    {
      img: Karol_Tofil,
      stage: "Institutional investors",
      title: "Karol Tofil",
      subtitle: "BGK, Head of International Business and Partnerships Office",
      linkedin: 'https://www.linkedin.com/in/karol-tofil-2126b714b/',
    },
    {
      img: Aziza_Zakhidova,
      stage: "Institutional investors",
      title: "Aziza Zakhidova",
      subtitle: "EBRD, Senior member of VC Team",
      linkedin: 'https://www.linkedin.com/in/azizazakhidova/',
    },
    {
      img: Maksym_Kuznetsov,
      stage: "PE panel",
      title: "Maksym Kuznetsov",
      subtitle: "Horizon Capital, Investment Director",
      linkedin: 'https://www.linkedin.com/in/maksym-kuznetsov-3788b560/',
    },
    {
      img: Leszek_Muzyczyszyn,
      stage: "PE panel",
      title: "Leszek Muzyczyszyn",
      subtitle: "Innova Capital, Senior Partner",
      linkedin: 'https://www.linkedin.com/in/leszek-muzyczyszyn-5561a71/',
    },
    {
      img: Przemysław_Głębocki,
      stage: "PE panel",
      title: "Przemysław Głębocki",
      subtitle: "Accession Capital Partners, Managing Partner",
      linkedin: 'https://www.linkedin.com/in/przemyslaw-glebocki-14b388/',
    },
    {
      img: Secret_Speaker,
      stage: "Fund of Funds",
      title: "Secret Speaker",
      subtitle: "Ukrainian Fund of Funds",
      linkedin: '',
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
