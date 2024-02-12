import Image from "next/image";
import styles from "./page.module.css";

import logo1 from '@/app/assets/img/partners/dreamX.svg';
import FirstSection from "./components/FirstSection";
import ScrollingText from "./components/ScrollingText";
import Partners from "./components/Partners";
import Article from "./components/Article";

export default function Home() {
  return (
    <>
      <FirstSection />
      <ScrollingText text={'Summit Organisers'}/>
      <Partners 
        bgcolor={'#E2F5EE'}
      />
      <Article />
      <ScrollingText text={'Partners and Sponsors'}/>
      <Partners 
        bgcolor={'#F3EAFF'}
        img={logo1}
      />
    </>
  );
}
