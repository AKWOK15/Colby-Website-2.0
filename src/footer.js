import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className='bottom'>
            <FontAwesomeIcon icon={faCopyright} style={{ color: "#646a75", }} className='copyright'/>
            {new Date().getFullYear()} Colby Club Hockey
            {/* <FontAwesomeIcon className="icon" icon={faInstagram} /> */}
            <a href="https://www.instagram.com/colbyclubhockey/" >
                <FontAwesomeIcon icon={faInstagram} className='icon' style={{ color: "#646a75", }} />
            </a>
            <a href="https://m.youtube.com/channel/UCOh41arhJiIw_XcnH0Oz4Dg">
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#646a75", }} className='icon' />
            </a>
            {/* <img className="colby-logo" src='./colbyclubhockeylogo.png'></img> */}
        </footer>
    );
}


export default Footer;