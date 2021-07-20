import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HotelList from '../HotelList/HotelList';
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
            <Header></Header>
            <HotelList></HotelList>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;