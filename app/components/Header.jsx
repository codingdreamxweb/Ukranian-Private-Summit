'use client';

import Image from "next/image";
import logo from '@/app/assets/img/logo.svg';
import localFont from 'next/font/local';
import { useEffect } from 'react';

const myFont = localFont({src: '../../public/unbounded.ttf'});



export default function Header () {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const navLinks = document.querySelectorAll('.header__nav-item');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.dataset.section;
        scrollToSection(sectionId);
      });
    });
  }, []);

  return(
    <div className="container header">
      <Image src={logo} alt="logo"></Image>
      <nav>
        <ul className={myFont.className + ' ' + "header__nav-list"}>
          <li className="header__nav-item" data-section="partners-section">Partners</li>
          <li className="header__nav-item" data-section="speakers-section">Speakers</li>
          <li className="header__nav-item" data-section="agenda-section">Agenda</li>
        </ul>
      </nav>
    </div>
  )
}