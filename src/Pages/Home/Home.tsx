import './Home.scss';
import { Header } from '../../Components/Header/Header';
import { Statistics } from '../../Components/Statistics/Statistics';
import Products from '../../Components/Products/Products';
import { Technologies } from '../../Components/Technologies/Technologies';
import { About } from '../../Components/About/About';
import { Choose } from '../../Components/Choose/Choose';
import { Location } from '../../Components/Location/Location';
import Interested from '../../Components/Interested/Interested';
import { Footer } from '../../Components/Footer/Footer';
export default function Home(){
    return (<>
    <Header/>
    <Statistics/>
    <Products/>
    <Technologies />
    <About />
    <Choose/>
    <Location/>
    <Interested />
    <Footer/>
    </>)
}