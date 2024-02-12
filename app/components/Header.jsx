import Image from "next/image";
import logo from '@/app/assets/img/logo.svg';
export default function Header () {
  return(
    <div className="container header">
      <Image src={logo} alt="logo"></Image>
      <nav>
        <ul className="header__nav-list">
          <li className="header__nav-item">Partners</li>
          <li className="header__nav-item">Speakers</li>
          <li className="header__nav-item">Agenda</li>
        </ul>
      </nav>
    </div>
  )
}