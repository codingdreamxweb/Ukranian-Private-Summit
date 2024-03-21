import logo1 from '@/app/assets/img/partners/icu-logo.jpg';
import logo3 from '@/app/assets/img/partners/rzm-logo.svg';
import logo4 from '@/app/assets/img/partners/logo.svg';
import Image from 'next/image';

export default function Partners2 ({ bgcolor, img, id }) {
  return (
    <section className="partners" id={id}>
      <div className="container partners__inner" style={{backgroundColor: bgcolor}}>
        <div className='partners__inner--img-container'><Image style={{height: '100%', width: 160}} src={logo1} alt="icu Logo"/></div>
        <div className='partners__inner--img-container'><Image src={logo3} alt="RZM Logo"/></div>
        <div className='partners__inner--img-container'><Image style={{maxWidth: 270}} src={logo4} alt="RZM Logo"/></div>
        <div className='dreamx'><a href="https://www.dreamxweb.com/"><Image src={img}/></a></div>
       
      </div>
    </section>
  )
}