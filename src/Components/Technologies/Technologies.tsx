import './Technologies.scss';
import { Container } from '@mui/material';
import { TechnoCard } from '../Card/TechnoCard';
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

interface ITech{
  createdAt: string, 
  id: number, 
  name: string, 
  text: string,
  updatedAt: string, 
  thubnail: string, 
  videoLink:string
}

const video: string[] = [
  "https://www.youtube.com/embed/rAVvdXWDRwY",
  "https://www.youtube.com/embed/vWUExuITeO0",
  "https://www.youtube.com/embed/qjWaxomW_Mo",
];
export const Technologies: React.FunctionComponent = () => {
  const [data, setData] = useState<ITech[] | null>(null);
  useEffect(() => {
    fetch('https://matrassesapp.herokuapp.com/api/technology')
    .then(res => res.json())
    .then(data=>{
      setData(data);
      
    })
  }, [])
    return (
      <Container maxWidth="xl">
        <h2 className="techno__title">Ishlab chiqarish texnologiyalari</h2>
        <ul className="techno__list">
          {data?.map((e: any, i: number) => {
            return (
              <li key={i} className="techno__item">
                <TechnoCard desc={e.text} name={e.name} video={video[i]} />
              </li>
            );
          })}
        </ul>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper techno__list--swiper"
        >
          {data?.map((e: any, i: number) => {
            return (
              <SwiperSlide key={i}>
                {" "}
                <li className="techno__item">
                  <TechnoCard desc={e.text} name={e.name} video={video[i]} />
                </li>
              </SwiperSlide>
            );
          })}

         
        </Swiper>
      </Container>
    );
}


          
        