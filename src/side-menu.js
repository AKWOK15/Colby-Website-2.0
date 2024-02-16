import './side-menu.css';
function SideMenu(){
    return(
        <div className='side-menu'>
            <a href="#About" className="side-link">ABOUT</a>
            <a href="#Roster" className="side-link">ROSTER</a>
            <a href="#Schedule" className="side-link">SCHEDULE</a>
            <a href="#Contact Us" className="side-link">CONTACT US</a> 
        </div>
    )
}
export default SideMenu;