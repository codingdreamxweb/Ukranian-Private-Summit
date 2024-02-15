import Image from "next/image";
import logo from '@/app/assets/img/logo-white.svg';
import arrow from '@/app/assets/img/Arrow-White.svg';
import facebook from '@/app/assets/img/facebook.svg';
import linkedin from '@/app/assets/img/linkedin.svg';

import localFont from 'next/font/local';

const myFont = localFont({src: '../../public/unbounded.ttf'});

export default function Bottom(params) {
  return (
    <section style={{maxWidth: '85%', margin: '0 auto', backgroundColor: '#0B4C99', borderRadius: 20}}>
      <div className="container bottom">
        <div className="bottom__first-line">
          <Image src={logo} alt="logo"></Image>
          <p className={myFont.className + ' ' + "date"}>March 21, 2024<br/> at Google Campus Warsaw, Poland</p>
          <div className="link">
            <a className={myFont.className + ' ' + "link-site"} href="">
            Visit UVCA summit organiser website
            <Image className="arrow" src={arrow} alt="arrow"></Image>
            </a>
            <p className="link-text">If you are interested in promoting your company / organization<br/> at the Summit, please contact us - <a className={myFont.className + ' ' + "link-mail"} href="">p.relations@uvca.eu</a></p>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <a href=""><Image src={facebook} alt="facebook icon"></Image></a>
          <a href=""><Image src={linkedin} alt="linkedin icon"></Image></a>
        </div>
        <h2 className={myFont.className}>SEE YOU AT THE SUMMIT!</h2>
      </div>
    </section>
  )
}