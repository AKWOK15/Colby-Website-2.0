import './hamburger.css';
import './side-menu.css'
import { useState } from 'react';
function Hamburger() {
    const [activeHamburger, setActiveHamburger] = useState(false);
    const handleClick = () => {
        console.log('click');
        setActiveHamburger(!activeHamburger);
    }
    function sideMenu() {
        return (
            <div className={activeHamburger ? 'side-menu active' : 'side-menu'} onClick={handleClick}>
            {/* <div className='side-menu' onClick={handleClick}> */}
                <a href='https://colbyathletics.com/sports/2021/11/17/giving-friends-of-recreation.aspx' className="side-link"><button className='side-button'>Donate</button></a>
                <a href='https://www.youtube.com/@ColbyRecreation' className='side-link'><button className='side-button'>Livestream</button></a>
                <a href="#About" className="side-link">ABOUT</a>
                <a href="#Roster" className="side-link">ROSTER</a>
                <a href="#Schedule" className="side-link">SCHEDULE</a>
                <a href="#Contact Us" className="side-link">CONTACT US</a>
            </div>
        )
    }
    return (
        <>
            <div class={activeHamburger ? 'x' : "hamburger"} onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            {/* Side menu needs to be sibling for z index to be successful */}
            {sideMenu()}
            {/* {activeHamburger ? sideMenu() : <></>} */}
        </>
    )
}

export default Hamburger;