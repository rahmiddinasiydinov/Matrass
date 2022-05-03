import { Container } from '@mui/material';
import React from 'react';
import './Interested.scss';


export default function Interested():any {
    return (
      <div className="interest">
        <Container maxWidth="xl">
          <div className="interest__wrapper">
            <div className="interest__content">
              <h2 className="interest__title">Sizni qiziqtirdimi?</h2>
              <p className="interest__text">
                Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz
              </p>
            </div>
            <form className="interest__form">
              <label htmlFor="tel" className="interest__label">
                +998
                <input
                  type="text"
                  id="tel"
                  className="interest__input"
                  placeholder="Raqamingizni yozing"
                />
              </label>
              <button className="interest__btn" type="submit">
                Yuborish{" "}
              </button>
            </form>
          </div>
        </Container>
      </div>
    );
}