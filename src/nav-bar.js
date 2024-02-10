import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHockeyPuck, faUser, faCalendar, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './nav-bar.css'
function NavBar(){
    return(
        <div className="nav-bar">
            <a href="#About" className="nav-link">ABOUT</a>
            <a href="#Roster" className="nav-link">ROSTER</a>
            <img className="colby-logo" src='./colbyclubhockeylogo.png'></img>
            <a href="#Schedule" className="nav-link">SCHEDULE</a>
            <a href="#Contact Us" className="nav-link">CONTACT US</a>
        </div>
       

    );
}
export default NavBar;

 {/* <div className="nav-bar">
            <a href="#About" className="nav-link"><FontAwesomeIcon className="icon" icon={faHockeyPuck} />About</a>
            <a href="#Roster" className="nav-link"><FontAwesomeIcon className="icon" icon={faUser} />Roster</a>
            <img class="colby-logo" src='./colbyclubhockeylogo.png'></img>
            <a href="#Schedule" className="nav-link"><FontAwesomeIcon className="icon" icon={faCalendar} />Schedule</a>
            <a href="#Contact Us" className="nav-link"><FontAwesomeIcon className="icon" icon={faEnvelope} />Contact Us</a>
        </div> */}