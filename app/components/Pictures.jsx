import Image from "next/image";
import location from "@/app/assets/img/pictures/location.svg";
import img1 from "@/app/assets/img/pictures/img1.png";
import img2 from "@/app/assets/img/pictures/img2.png";
import img3 from "@/app/assets/img/pictures/img3.png";
import img4 from "@/app/assets/img/pictures/img4.png";
import img5 from "@/app/assets/img/pictures/img5.png";

import localFont from 'next/font/local';

const myFont = localFont({src: '../../public/unbounded.ttf'});


export default function Pictures() {
  return (
    <section className="container">
      <div className="pictures">
        <div className="pictures__location-container" style={{ display: "flex", gap: 20 }}>
          <div className="text-container">
            <div>
              <a href="https://maps.app.goo.gl/RYeVwvewWd2Mz9T86" style={{cursor: 'pointer', textDecoration: 'none'}}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Image style={{width: 'unset'}} src={location} alt="location icon"></Image>
                  <p className={myFont.className + ' ' + "location"}>Location</p>
                </div>
                <h2 className={myFont.className + ' ' + "pictures__title"}>
                  <span>Google Campus</span>
                  <br />
                  <span>Warsaw, Poland</span>
                </h2>
                <p className={myFont.className + ' ' + "pictures__date"}>March 21, 2024</p>
              </a>
            </div>
            <div>
              <Image style={{width: '100%'}} src={img1} alt="location picture"></Image>
            </div>
          </div>
          <div>
            <Image src={img2} alt="location picture" />
          </div>
        </div>
        <div className="pictures__right-container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20}}>
          <div >
            <Image style={{width: '100%'}} src={img3} alt="location picture"></Image>
          </div>
          <div style={{display: 'flex', gap: 20, justifyContent: 'space-between'}}>
            <div style={{width: '45%'}}>
            <Image style={{width: '100%'}} src={img4} alt="location picture"></Image>
            </div>
            <div style={{width: '45%'}}>
            <Image style={{width: '100%'}} src={img5} alt="location picture"></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
