import './hamburger.css';
import SideMenu from './side-menu';
import { useState } from 'react';
function Hamburger() {
    const [activeHamburger, setActiveHamburger] = useState(false);
    const handleClick = () => {
        console.log('click');
        setActiveHamburger(!activeHamburger);
    }
    return (
        <>
            <div class={activeHamburger ? 'x' : "hamburger"} onClick={handleClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            {activeHamburger ? <SideMenu /> : <></>}
        </>
    )
}

export default Hamburger;