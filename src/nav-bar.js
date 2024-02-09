import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHockeyPuck, faUser, faCalendar, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './nav-bar.css'
function NavBar(){
    return(
        <div className="nav-bar">
            <a href="#About"><FontAwesomeIcon icon={faHockeyPuck} />About</a>
            <a href="#Roster"><FontAwesomeIcon icon={faUser} />Roster</a>
            <a href="#Schedule"><FontAwesomeIcon icon={faCalendar} />Schedule</a>
            <a href="#Contact Us"><FontAwesomeIcon icon={faEnvelope} />Contact Us</a>
        </div>

    );
}
export default NavBar;