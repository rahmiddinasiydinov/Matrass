import './Statistics.scss';
import Container from "@mui/material/Container";
import { useEffect, useState } from 'react';



 
interface Istatistics {
  createdAt: string;
  updatedAt:string
  satisfied_customers: string;
  id: number;
  delivery: number;
  experience: number;
  warranty: number;
}
 
export const Statistics: React.FC = () => {
  const [data, setData] = useState<Istatistics | null>(null);
  useEffect(() => {
    fetch("https://matrassesapp.herokuapp.com/api/info")
      .then(res => res.json())
      .then(data => {
        setData(data[0])
      });
  }, [])
    return (
      <Container maxWidth="xl" className="statistics">
        <ul className="statistics__list">
          <li className="statistics__item">
            <span className="statistics__number">{data?.experience}</span>
            <span className="statistics__text">yillik tajriba</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__number">
              {data?.satisfied_customers}
            </span>
            <span className="statistics__text">mamnun mijozlar</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__number">{data?.warranty}</span>
            <span className="statistics__text">yillik kafolat</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__number">{data?.delivery}</span>
            <span className="statistics__text">kunda yetkazish</span>
          </li>
        </ul>
      </Container>
    );
}
