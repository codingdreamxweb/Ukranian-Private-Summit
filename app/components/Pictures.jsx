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
        <div style={{ display: "flex", gap: 20 }}>
          <div className="text-container">
            <div>
              <a href="" style={{cursor: 'pointer', textDecoration: 'none'}}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Image src={location} alt="location icon"></Image>
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
              <Image src={img1} alt="location picture"></Image>
            </div>
          </div>
          <div>
            <Image src={img2} alt="location picture" />
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20}}>
          <div>
            <Image src={img3} alt="location picture"></Image>
          </div>
          <div style={{display: 'flex', gap: 20}}>
            <Image src={img4} alt="location picture"></Image>
            <Image src={img5} alt="location picture"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
