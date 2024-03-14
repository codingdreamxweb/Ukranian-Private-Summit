import logo1 from '@/app/assets/img/partners/dreamX.svg';
import FirstSection from "./components/FirstSection";
import ScrollingText from "./components/ScrollingText";
import Partners from "./components/Partners";
import Partners2 from "./components/Partners-2";
import Article from "./components/Article";
import Speakers from "./components/Speakers";
import Agenda from "./components/Agenda";
import Pictures from "./components/Pictures";
import Bottom from "./components/Bottom";

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
      <Partners2
        bgcolor={'#F3EAFF'}
        img={logo1}
        id={'partners-section'}
      />
      <Speakers id={'speakers-section'}/>
      <ScrollingText text={'Agenda'}/>
      <Agenda id={'agenda-section'}/>
      <Pictures />
      <Bottom />
      <div style={{
        textAlign: 'center',
        
      }}>
        <p>
          © 2024 PE&VC Ukrainian Summit Warsaw. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
