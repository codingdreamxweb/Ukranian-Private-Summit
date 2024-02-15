"use client";

import Image from "next/image";
import img from "@/app/assets/img/speakers/image.png";
import img2 from "@/app/assets/img/speakers/image2.png";
import img3 from "@/app/assets/img/speakers/image3.png";
import img4 from "@/app/assets/img/speakers/image4.png";
import vector from "@/app/assets/img/speakers/vector.svg";
import arrow from "@/app/assets/img/arrow-blue.svg";

import { useState } from "react";
import localFont from 'next/font/local';

const myFont = localFont({src: '../../public/unbounded.ttf'});
const myFont2 = localFont({src: '../../public/mon.ttf'});

export default function Speakers() {
  const SpeakersItem = ({ img, stage, title, subtitle}) => {
    return (
      <div className="speakers__item">
        <Image className="speakers__item--speaker-img" src={img} alt="speakers picture" />
        <div className="speakers__item--text-container">
          <Image src={vector}></Image>
          <div className="speakers__item--text">
            <p className="stage">{stage}</p>
            <p className={myFont.className + ' ' + "name"}>{title}</p>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    );
  };

  const gridItemData = [
    {
      img: img,
      stage: "Stage Name",
      title: "Brooklyn Simmons",
      subtitle: "CEO, Company Name",
    },
    {
      img: img2,
      stage: "Stage Name",
      title: "Arlene McCoy",
      subtitle: "CEO, Company Name",
    },
    {
      img: img3,
      stage: "Stage Name",
      title: "Eleanore Pena",
      subtitle: "CEO, Company Name",
    },
    {
      img: img4,
      stage: "Stage Name",
      title: "Jacob Jones",
      subtitle: "CEO, Company Name",
    },
    {
      img: img,
      stage: "Stage Name",
      title: "Brooklyn Simmons",
      subtitle: "CEO, Company Name",
    },
    {
      img: img2,
      stage: "Stage Name",
      title: "Arlene McCoy",
      subtitle: "CEO, Company Name",
    },
    {
      img: img3,
      stage: "Stage Name",
      title: "Eleanore Pena",
      subtitle: "CEO, Company Name",
    },
    {
      img: img4,
      stage: "Stage Name",
      title: "Jacob Jones",
      subtitle: "CEO, Company Name",
    },
    {
      img: img,
      stage: "Stage Name",
      title: "Brooklyn Simmons",
      subtitle: "CEO, Company Name",
    },
    {
      img: img2,
      stage: "Stage Name",
      title: "Arlene McCoy",
      subtitle: "CEO, Company Name",
    },
    {
      img: img3,
      stage: "Stage Name",
      title: "Eleanore Pena",
      subtitle: "CEO, Company Name",
    },
    {
      img: img4,
      stage: "Stage Name",
      title: "Jacob Jones",
      subtitle: "CEO, Company Name",
    },
  ];

  const [showText, setShowText] = useState();

  const handleShowText = () => {
    setShowText(!showText);
  }

  return (
    <section className={"container speakers"}>
      <h2 className={myFont.className}>Speakers</h2>
      <div className="speakers__buttons-container">
        <button className={myFont2.className}>All Speakers</button>
        <button className={myFont2.className}>Stage Name</button>
        <button className={myFont2.className}>Stage Name</button>
        <button className={myFont2.className}>Stage Name</button>
        <button className={myFont2.className}>Stage Name</button>
        <button className={myFont2.className}>Stage Name</button>
        <button className={myFont2.className}>Stage Name</button>
      </div>
      <div className="speakers__grid-container">
        {!showText ? 
         (gridItemData.slice(0, 8).map((item, key) =>
          <SpeakersItem 
            key={key}
            img={item.img}
            stage={item.stage}
            title={item.title}
            subtitle={item.subtitle}
          />
         )) :
         (gridItemData.map((item, key) => 
          <SpeakersItem 
            key={key}
            img={item.img}
            stage={item.stage}
            title={item.title}
            subtitle={item.subtitle}
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
