import ManiItem from '../ManiItem/ManiItem';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <div className='header'>
            <NavBar></NavBar>
            <ManiItem></ManiItem>
        </div>
    );
};

export default Header;