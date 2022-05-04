import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import './Header.scss';
import { ReactComponent as Logo } from '../../Assets/Images/Logo.svg';
import { ReactComponent as Phone } from "../../Assets/Images/Phone.svg";
import { NavLink } from "react-router-dom";
import { SlideComponent } from './SlideComponent';
import { MobileMenu } from '../Mobile/Mobile';
import { loaderAction } from "../../Redux/ReduxSlices/LoadSlic";
import { Cross as Hamburger } from "hamburger-react";
import { useDispatch } from "react-redux";

    
interface Iintro{
  createdAt: string, 
  id: number, 
  img: string, 
  phone_number: string, 
  text: string, 
  updatedAt:string
}


export const Header: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState<Iintro | null>(null);
  
  
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    fetch("https://matrassesapp.herokuapp.com/api/intro")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setInfo(data[0]);
        dispatch(loaderAction.handleLoad(true));
      });
  }, [])
const handleClose:any =()=>{setOpen(false)}
  return (
    <>
      <React.Fragment>
        <CssBaseline />

        <Box
          component={"div"}
          sx={{ bgcolor: "#EABF9F", height: "640px", width: "100%" }}
          id="header"
        >
          <Container maxWidth="xl">
            <MobileMenu
              tel={info?.phone_number}
              isOpen={isOpen}
              setOpen={setOpen}
              handleClose={handleClose}
            />
            <div className="header__burger">
              {" "}
              <Logo style={{ fill: "#01384D" }} />
              <Hamburger toggled={isOpen} toggle={setOpen} color="#01384D" />
            </div>
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <a href="#catalogue" className="header__link">
                    Katalog
                  </a>
                </li>
                <li className="header__item">
                  <a href="#discount" className="header__link">
                    Aksiya
                  </a>
                </li>
                <li className="header__item">
                  <a href="#about-us" className="header__link">
                    Biz haqimizda
                  </a>
                </li>
                <li className="header__item">
                  <a href="#location" className="header__link">
                    Manzilimiz
                  </a>
                </li>
                <li className="header__item">
                  <a href="#connection" className="header__link">
                    Aloqa
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__info">
              <NavLink to="/" className="header__logo">
                <Logo />
              </NavLink>
              <div className="header__button--group">
                <a href={`tel:${info?.phone_number}`} className="header__btn">
                  <Phone className="header__btn--phone" /> {info?.phone_number}
                </a>
                <a href="#products" className="header__btn">
                  Buyurtma berish
                </a>
              </div>
            </div>
            <SlideComponent text={info?.text} img={info?.img} />
          </Container>
        </Box>
      </React.Fragment>
    </>
  );
  
}
