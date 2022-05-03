import './Header.scss';
import { Box } from '@mui/system';
import {ReactComponent as Arrow} from '../../Assets/Images/arrow.svg'
import matras from '../../Assets/Images/matras.png';



interface Islide{
  text:string | undefined, 
  img:string |undefined
}
export const SlideComponent: React.FC<Islide> = ({text, img})=>{
    
    return (
      <Box component={"div"} className="header__slide">
        <div className="header__slide--content">
          <h1 className="header__title">{text}</h1>
          <a href="#products" className="header__btn header__catalogue">
            Kategoriyalar
            <Arrow className="header__arrow" />
          </a>
        </div>
            <div className="header__slide--body">
                <img src={matras} alt="" className="header__slide--img" />
        </div>
      </Box>
    );
}