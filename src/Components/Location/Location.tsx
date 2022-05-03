import { Container } from '@mui/material';
import './Location.scss';
import { ReactComponent as Map } from '../../Assets/Images/map.svg';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import office1 from '../../Assets/Images/office1.jpg';
import office2 from '../../Assets/Images/office2.jpg';
import office3 from "../../Assets/Images/office3.jpg";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { useEffect, useState } from 'react';


interface Iadress{
  createdAt: string, 
  id: number, 
  img: string, 
  intended: string, 
  location: string, 
  name: string, 
  updatedAt:string
}



export const Location: React.FC = () => {
  const[address, setAddress] = useState<Iadress | null>(null)
  useEffect(() => {
    fetch("https://matrassesapp.herokuapp.com/api/address")
    .then(res=>res.json())
      .then(data => {
      setAddress(data[0])
    })
  }, [])
    return (
      <Container maxWidth="xl">
        <div className="location" id='location'>
          <div className="location__content">
            <h2 className="location__title">Manzilimiz</h2>
            <h3 className="location__subtitle">
              {address?.name}
            </h3>
            <p className="location__text">
              {address?.intended}
            </p>
            <a href="https://www.google.com/maps/place/Luxmatras/@41.309172,69.2656155,13z/data=!4m9!1m2!2m1!1sToshkent,+Parkent+ko'chasi,+176-uy!3m5!1s0x38aef5f152e3cabf:0x95f5c523a9bdd594!8m2!3d41.309172!4d69.3356533!15sCiJUb3Noa2VudCwgUGFya2VudCBrbydjaGFzaSwgMTc2LXV5WiIiIHRvc2hrZW50IHBhcmtlbnQga28gY2hhc2kgMTc2IHV5kgEObWF0dHJlc3Nfc3RvcmU" className="location__btn">
              <Map className="location__map" /> Geolokatsiya
            </a>
          </div>
          <div className="location__img--wrapper">
            <Swiper
              slidesPerView={1}
              centeredSlides={false}
              slidesPerGroupSkip={1}
              grabCursor={true}
              loop={true}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                769: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              }}
              scrollbar={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img alt='' src={office1} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt='' src={office2} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt='' src={office3} />
              </SwiperSlide>
           
            </Swiper>
          </div>
        </div>
      </Container>
    );
}