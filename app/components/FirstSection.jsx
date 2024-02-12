import Image from "next/image";
import arrow from "@/app/assets/img/Arrow-White.svg";
import ggg from "../assets/video/gggg.svg";

export default function FirstSection() {
  return (
    <section className="container first-section">
      <h1 className="h1">Ukrainian Private Equity & Venture Capital Summit</h1>
      <p className="subtitle">
        March 21, 2024
        <br /> <span>Google Campus Warsaw, Poland</span>{" "}
      </p>
      <p className="text">
        The EU-Ukraine Investment Bridge: a meeting place for Ukrainian and
        international investors
      </p>
      <button className="button">
        I want to attend <Image src={arrow} />
      </button>
      <div className="video-container">
        <video className="video" loop controls preload="auto" autoPlay>
          <source src="../assets/video/flag.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
