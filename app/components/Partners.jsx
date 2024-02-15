import logo1 from '@/app/assets/img/partners/uvca-logo.svg';
import logo2 from '@/app/assets/img/partners/psik-logo.svg';
import logo3 from '@/app/assets/img/partners/rzm-logo.svg';
import Image from 'next/image';

export default function Partners ({ bgcolor, img, id }) {
  return (
    <section className="partners" id={id}>
      <div className="container partners__inner" style={{backgroundColor: bgcolor}}>
        <div><Image src={logo1} alt="UVCA Logo"/></div>
        <div><Image src={logo2} alt="PSIK Logo"/></div>
        <div><Image src={logo3} alt="RZM Logo"/></div>
        {img && <div><Image src={img}/></div>}
      </div>
    </section>
  )
}