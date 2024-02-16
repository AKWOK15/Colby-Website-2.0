import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className='footer'>
            {/* <FontAwesomeIcon className="icon" icon={faInstagram} /> */}
            <a  href="https://www.instagram.com/colbyclubhockey/">
                <FontAwesomeIcon icon={faInstagram} className='icon' style={{ color: "white", }} />
            </a>
            <a  href="https://m.youtube.com/channel/UCOh41arhJiIw_XcnH0Oz4Dg">
                <FontAwesomeIcon icon={faYoutube} className='icon' style={{ color: "white", }} />
            </a>
            <img className="colby-logo" src='./colbyclubhockeylogo.png'></img>
        </footer>
    );
}


export default Footer;