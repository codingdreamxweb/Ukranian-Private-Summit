"use client";

import Image from "next/image";
import arrow from "@/app/assets/img/Arrow-White.svg";
import { useState } from "react";
import axios from "axios";
import sendEmail from "../lib/mailer";

export default function FirstSection() {
  const [modal, setModal] = useState();
  const handleOpenModel = () => {
    setModal(!modal);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = async () => {
  //   const formData = { name, company, email, message };

  //   try {
  //     await axios.post("api/contacts/", formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // console.log(name, company, email, message);
  //     setName("");
  //     setCompany("");
  //     setEmail("");
  //     setMessage("");
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };




  return (
    <section className="container first-section">
      <h1 className="h1css h1 ">
        Ukrainian Private Equity & Venture Capital Summit
      </h1>
      <p className="subtitle">
        March 21, 2024
        <br /> <span>Google Campus Warsaw, Poland</span>{" "}
      </p>
      <p className="text">
        The EU-Ukraine Investment Bridge: a meeting place for Ukrainian and
        international investors
      </p>
      <button onClick={() => handleOpenModel()} className="button">
        I want to attend <Image src={arrow} />
      </button>
      <div className="video-container">
        <video className="video" loop controls preload="auto" autoPlay>
          <source src="../assets/flag.mp4" type="video/mp4" />
        </video>
        {/* <video className="video" loop controls autoPlay src='./flag.mp4'></video> */}
      </div>

      {modal && (
        <>
          <div className="modal">
            <h2>
              Registration for the Ukrainian
              <br /> PE&VC Summit
            </h2>
            <form className="form">
              <div className="input-container">
                <label className="label" htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  className="input"
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
                  className="input"
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
                  className="input"
                  type="text"
                  id="organization"
                  placeholder="Enter your organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label">
                  Are you agree to participate at one of the panels as a
                  speaker? <span>*</span>
                </label>
                <select className="input" name="speaker" id="">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="input-container">
                <label className="label">
                  If you agree, which panel would you like to participate in?{" "}
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your answer"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label className="label">
                  Would you like to support the Summit as a sponsor, partner or
                  in any other way? <span>*</span>
                  <br />
                  (We will contact you to discuss the options)
                </label>
                <select className="input" name="speaker" id="">
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
                <select className="input" name="speaker" id="">
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
                <button className="button">
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
