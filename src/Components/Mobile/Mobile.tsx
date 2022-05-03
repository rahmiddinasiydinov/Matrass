import './Mobile.scss';
import { ReactComponent as Logo } from '../../Assets/Images/Logo.svg';
import { Cross as Hamburger } from "hamburger-react";
import {ReactComponent as Phone} from '../../Assets/Images/Phone.svg'

interface Imenu {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tel: string | undefined;
  handleClose:()=>void
}
export const MobileMenu: React.FC<Imenu> = ({ tel, isOpen, setOpen, handleClose }) => {
    return (
      <ul className={`mobile__list ${isOpen ? "mobile__active" : ""}`}>
        <li className="mobile__item">
          <Logo className=" mobile__logo" />
          <Hamburger toggled={isOpen} toggle={setOpen} color="#01384D" />
        </li>
        <li className="mobile__item">
          <a href="#catalogue" className="mobile__link" onClick={handleClose}>
            Katalog
          </a>
        </li>
        <li className="mobile__item">
          <a href="#discount" className="mobile__link" onClick={handleClose}>
            Aksiya
          </a>
        </li>
        <li className="mobile__item">
          <a href="#about-us" className="mobile__link" onClick={handleClose}>
            Biz haqimizda
          </a>
        </li>
        <li className="mobile__item">
          <a href="#location" className="mobile__link" onClick={handleClose}>
            Manzilimiz
          </a>
        </li>
        <li className="mobile__item">
          <a href="#connection" className="mobile__link" onClick={handleClose}>
            Aloqa
          </a>
        </li>
        <li className="mobile__item">
          <a href="#products" className="mobile__link mobile__order" onClick={handleClose}>
            Buyurtma berish
          </a>
        </li>
        <li className="mobile__item">
          <a href={`tel:${tel}`} className="mobile__link mobile__link--last">
            <span className="mobile__phone">
              <Phone />
            </span>
            {tel}
          </a>
        </li>
      </ul>
    );
}