import './Choose.scss';
import { Container } from '@mui/material';
import choose1 from '../../Assets/Images/choose1.png';
import choose2 from '../../Assets/Images/choose2.png';
import choose3 from "../../Assets/Images/choose3.png";



export const Choose: React.FC = () => {
    return (
      <Container component={"div"} maxWidth="xl" className="choose">
        <h2 className="choose__title">Nega bizni tanlashadi</h2>
        <ul className="choose__list">
          <li className="choose__item">
            <div className="choose__img--wrapper">
              <img src={choose1} alt="" className="choose__img" />
            </div>
            <h3 className="choose__subtitle">Yetkazib berish</h3>
            <p className="choose__text">
              Toshkent bo'ylab bepul o'lchov va etkazib berish
            </p>
          </li>
          <li className="choose__item">
            <div className="choose__img--wrapper">
              <img src={choose2} alt="" className="choose__img" />
            </div>
            <h3 className="choose__subtitle">Qo'llab-quvvatlash</h3>
            <p className="choose__text">
              Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam
              beradi va menejerlarning{" "}
            </p>
            <a href="tel:+998 97 144-24-42" className="choose__link">
              +998 97 144-24-42
            </a>
          </li>
          <li className="choose__item">
            <div className="choose__img--wrapper">
              <img src={choose3} alt="" className="choose__img" />
            </div>
            <h3 className="choose__subtitle">Kafolat</h3>
            <p className="choose__text">
              Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras
              kamida 25 mm qisqartirilsa.
            </p>
          </li>
        </ul>
      </Container>
    );
} 