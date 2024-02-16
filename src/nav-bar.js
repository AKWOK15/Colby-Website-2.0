import './nav-bar.css'
import { Link } from 'react-router-dom';
import Hamburger from './hamburger';
// import { useNavigate } from 'react-router-dom';
function NavBar() {
    return (
        <div className="nav-bar">
            <img className="colby-logo" src='./colbyclubhockeylogo.png'></img>
            {/* <a href="#About" className="nav-link">ABOUT</a>
            <a href="#Roster" className="nav-link">ROSTER</a>
            <a href="#Schedule" className="nav-link">SCHEDULE</a>
            <a href="#Contact Us" className="nav-link">CONTACT US</a> */}
            <a href='https://colbyathletics.com/sports/2021/11/17/giving-friends-of-recreation.aspx'><button className='nav-bar-button'>Donate</button></a>
            <a href='https://www.youtube.com/@ColbyRecreation'><button className='nav-bar-button'>Livestream</button></a>
            <Hamburger />
        </div>


    );
}
export default NavBar;
