"use client";

import Image from "next/image";
import arrow from "@/app/assets/img/arrow-blue.svg";
import img from '@/app/assets/img/article.png';
import { useState } from "react";
import localFont from 'next/font/local';

const myFont = localFont({src: '../../public/unbounded.ttf'});

export default function Article() {

  const [showText, setShowText] = useState();

  const handleShowText = () => {
    setShowText(!showText);
  }


  return (
    <section className="container article">
      <div className="article__text-container">
        <h2 className={myFont.className}>The war is not over yet.</h2>
        <p>
          <span>
            However, we have achieved a lot with the support of our allies and
            friends - EU countries, Great Britain, USA. And we hope to have this
            support after the victory, working shoulder-by-shoulder on Ukraine's
            recovery and redevelopment.
          </span>
          <br />
          <span>
            This summit will provide an opportunity to meet with representatives
            of the Ukrainian investment community, who are currently working
            hard to support the Ukrainian economy and will participate in the
            post-war reconstruction of Ukraine.
          </span>
          <br />
          <span>
            This summit will demonstrate the resilience and courage of
            Ukrainians, which manage to fight and run business simultaneously. 
            And we honor those who support us on our way.
          </span>
          <br />
          <span className={!showText ? "hide-text" : "show-text"}>
            During the Summit, we will discuss new solutions and tools that will
            help Ukraine to recover in the future and maintain the current
            growth rate. We will share an overview of the current situation in
            various spheres of the Ukrainian economy and the best proposals for
            joint investment. We will discuss the best ways and opportunities
            for investing in the priority sectors of the Ukrainian economy
            today.
          </span>
          <br />
          <span className={!showText ? "hide-text" : "show-text"}>
            Among our speakers and guests are representatives and managers of
            institutional investment and trade organizations, funds & investment
            companies, government representatives and strategic partners from
            the EU, Great Britain, the USA and others.
          </span>
        </p>
        <div className={myFont.className + ' ' + "active-text"} onClick={(e) => setShowText(!showText)}>
          {!showText ? <p>Read more </p> : <p>Show less</p>}
          <Image 
            className={("arrow") + ' ' + (showText ? 'arrow-up' : 'arrow-down') }
            src={arrow} 
            alt="arrow icon"
            style={{transform: !showText ? '' : 'rotate(180deg)'}}
          />
        </div>
      </div>
      <div className="article__img-container">
        <Image src={img}></Image>
      </div>
    </section>
  );
}
