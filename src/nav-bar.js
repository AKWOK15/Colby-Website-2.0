// as long as css file is imported in any file, it will work globally, if not imported, css won't be applied
import './nav-bar.css'
import {useState} from 'react';
import Hamburger from './hamburger';
import logo from './images/colby.png'
// import { useNavigate } from 'react-router-dom';
function NavBar() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return (
        <div className="nav-bar">
            <img className="colby-logo" src={logo} alt='Colby College Club Hockey Logo'></img>
            {screenWidth > 1000 ? (
                <div className='options'>
                    <a href="#About" className="nav-link">ABOUT</a>
                    <a href="#Roster" className="nav-link">ROSTER</a>
                    <a href="#Schedule" className="nav-link">SCHEDULE</a>
                    <a href="#Contact Us" className="nav-link">CONTACT US</a>
                    <a href='https://colbyathletics.com/sports/2021/11/17/giving-friends-of-recreation.aspx'><button className='nav-bar-button'>Donate</button></a>
                    <a href='https://www.youtube.com/@ColbyRecreation'><button className='nav-bar-button'>Livestream</button></a>
                </div>) :
                <Hamburger />
            }

        </div>


    );
}
export default NavBar;
