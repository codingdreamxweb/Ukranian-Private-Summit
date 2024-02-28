"use client";

import Image from "next/image";
import arrow from "@/app/assets/img/Arrow-White.svg";
import { useState } from "react";

import axios from "axios";
// import sendEmail from "../lib/mailer";
import localFont from 'next/font/local';

const myFont = localFont({src: '../../public/unbounded.ttf'});
const myFont2 = localFont({src: '../../public/mon.ttf'});

export default function FirstSection() {
  const [modal, setModal] = useState();
  const handleOpenModel = () => {
    setModal(!modal);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  // const [message, setMessage] = useState("");
  // const [speakerAgreement, setSpeakerAgreement] = useState("yes");
  const [supportAgreement, setSupportAgreement] = useState("yes");
  const [promotionAgreement, setPromotionAgreement] = useState("yes");

  const handleSubmit = async () => {
    const formData = { name, company, email, supportAgreement, promotionAgreement };

    try {
      await axios.post("api/contacts/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(name, company, email, supportAgreement, promotionAgreement);
      setName("");
      setCompany("");
      setEmail("");
      setPromotionAgreement("");
      setSupportAgreement("");
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <section className="container first-section">
      <h1 className={myFont.className + ' ' + "h1css h1 "}>
        Ukrainian Private Equity & Venture Capital Summit
      </h1>
      <p className={myFont.className + ' ' + "subtitle"}>
        March 21, 2024
        <br /> <span>Google for Startups Campus in Warsaw</span>
      </p>
      <p className="text">
        The EU-Ukraine Investment Bridge: a meeting place for Ukrainian and
        international investors
      </p>
      <button onClick={() => handleOpenModel()} className={myFont.className + ' ' + "button"}>
        I want to attend <Image src={arrow} />
      </button>
      <div className="video-container">
        <video className="video" src="video.mp4" loop preload="auto" muted autoPlay>
        </video>
      </div>

      {modal && (
        <>
          <div className="modal">
            <h2 className={myFont.className}>
              Registration for the Ukrainian
              <br /> PE&VC Summit
            </h2>
            <form className="form">
              <div className="input-container">
                <label className="label" htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  className={myFont2.className + ' ' + "input"}
                  type="text"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="name">
                  Full name <span>*</span>
                </label>
                <input
                  className={myFont2.className + ' ' + "input"}
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="organization">
                  Organization <span>*</span>
                </label>
                <input
                  className={myFont2.className + ' ' + "input"}
                  type="text"
                  id="organization"
                  placeholder="Enter your organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label">
                  Would you like to support the Summit as a sponsor, partner or
                  in any other way? <span>*</span>
                  <br />
                  (We will contact you to discuss the options)
                </label>
                <select 
                  className={myFont2.className + ' ' + "input"} 
                  name="speaker" 
                  id=""
                  value={supportAgreement}
                  onChange={(e) => setSupportAgreement(e.target.value)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="input-container">
                <label className="label">
                  Would you like to promote your company / organization during
                  the Summit? <span>*</span>
                  <br />
                  (We will contact you to discuss the options)
                </label>
                <select 
                  className={myFont2.className + ' ' + "input"} 
                  name="speaker" 
                  id=""
                  value={promotionAgreement}
                  onChange={(e) => setPromotionAgreement(e.target.value)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              
            </form>
            <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button onClick={handleSubmit} className={myFont.className + ' ' + "button"}>
                  Send <Image src={arrow} />
                </button>
              </div>
          </div>
          <div onClick={() => handleOpenModel()} className="overlay"></div>
        </>
      )}
    </section>
  );
}
