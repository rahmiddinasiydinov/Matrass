import './Card.scss';
import cardImg from '../../Assets/Images/cardimg.png'
import { ReactComponent as Basket } from '../../Assets/Images/basket.svg';
import { ReactComponent as Lupa } from '../../Assets/Images/lupa.svg';
import { IProduct } from '../Products/Products';
import { useState } from 'react';
import Modal from '../Modal/Modal'


export const Cards: React.FC<IProduct> = ({
              capacity,
              description,
              discount_price,
              id,
              img,
              isDiscount,
              isNew,
              price,
              size,
              title,
              waranty,
              yuklama,
}) => {
   const [open, setOpen] = useState<boolean>(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <div className="card" data-id={id}>
      <Modal open={open} handleClose={handleClose} id={id}/>
      <div className="card__buttons">
        {isNew ? (
          <button className="card__buttons--item">Yangi Mahsulot</button>
        ) : (
          ""
        )}
        {isDiscount ? (
          <button className="card__buttons--item discount">Aksiya</button>
        ) : (
          ""
        )}
      </div>
      <div className="card__img--wrapper">
        <button className="card__lupa--wrapper">
          <Lupa className="card__lupa" />
        </button>
        <img src={cardImg} alt={title} className="card__img" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <ul className="card__list">
          <li className="card__item">
            <span className="card__item--title">Yuklama</span>
            <span className="card__item--info">{yuklama} kg</span>
          </li>
          <li className="card__item">
            <span className="card__item--title">Kafolat</span>
            <span className="card__item--info">{waranty} yil</span>
          </li>
          <li className="card__item">
            <span className="card__item--title">O’lchami</span>
            <span className="card__item--info">{size}</span>
          </li>
          <li className="card__item">
            <span className="card__item--title">Sig’imi</span>
            <span className="card__item--info">{capacity}</span>
          </li>
        </ul>
        <p className="card__desc">{description}</p>
        <div className="card__item">
          <span className="card__item--title">Narxi</span>
          <div>
            {" "}
            {isDiscount ? (
              <span className="card__item--discount">{price} so'm</span>
            ) : (
              ""
            )}
            <span className="card__item--info">
              {isDiscount ? discount_price : price} so'm
            </span>
          </div>
        </div>
        <button className="card__btn" onClick={handleOpen}>
          Buyurtma berish <Basket className="card__basket" />
        </button>
      </div>
    </div>
  );
};