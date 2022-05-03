import { Container } from '@mui/material';
import './Footer.scss';
import { ReactComponent as Facebook } from "../../Assets/Images/facebook.svg";
import { ReactComponent as Youtube } from "../../Assets/Images/youtube.svg";
import { ReactComponent as Vimeo } from "../../Assets/Images/vimeo.svg";
import { ReactComponent as Twitter } from "../../Assets/Images/twitter.svg";
import { ReactComponent as Arrow } from '../../Assets/Images/arrow-up.svg';
import { ReactComponent as Visitka} from '../../Assets/Images/visitka.svg'
export const Footer: React.FC = () => {
    return (
      <div className="footer">
        <Container maxWidth="xl">
          <div className="footer__list--group">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#about-us" className="footer__link">
                  Biz haqimizda
                </a>
              </li>
              <li className="footer__item">
                <a href="#catalogue" className="footer__link">
                  Katalog
                </a>
              </li>
              <li className="footer__item">
                <a href="#discount" className="footer__link">
                  Aksiya
                </a>
              </li>
              <li className="footer__item">
                <a href="#location" className="footer__link">
                  Manzilimiz
                </a>
              </li>
            </ul>
            <ul className="footer__social">
              <li className="footer__social--item">
                <a href="https://www.facebook.com/" className="footer__link">
                  <Facebook />
                </a>
              </li>
              <li className="footer__social--item">
                <a href="https://twitter.com/?lang=en" className="footer__link">
                  <Twitter />
                </a>
              </li>
              <li className="footer__social--item">
                <a href="https://vimeo.com/" className="footer__link">
                  <Vimeo />
                </a>
              </li>
              <li className="footer__social--item">
                <a href="https://www.youtube.com/" className="footer__link">
                  <Youtube />
                </a>
              </li>
            </ul>
          </div>
          <hr className="footer__line" />
          <div className="footer__info">
            <span className="footer__info--item">
              © 2021 Dream Cloud. Barcha huquqlar himoyalangan.
            </span>
            <a href="#header" className="footer__info--item footer__top">
              <Arrow className="footer__arrow" />
            </a>
            <a href="https://abutech.uz/" className="footer__info--item">
              <Visitka className='footer__visitka'/>
            </a>
          </div>
        </Container>
      </div>
    );
}