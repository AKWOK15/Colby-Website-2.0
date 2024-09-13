import './schedule.css'
import './table.css'
import { useState, useEffect } from 'react';
import frontRink from './images/frontrink.jpg';
import bates from './images/bates.svg';
import cmcc from './images/cmcc.png';
import dartmouth from './images/dartmouth.png';
import sjc from './images/sjc.png';
import thomas from './images/thomas.png';
import une from './images/une.png';
import wit from './images/wit.svg';
import wpi from './images/wpi.png';
import arkansas from './images/arkansas.png';
import saintvincent from './images/saintvincent.png';
import lawrencetech from './images/lawrencetech.png';
function Schedule() {
    //add wins, losses, etc once database table is set up
    const [scroll, setScroll] = useState(window.scrollY);
    const handleScroll = () => {
        setScroll(window.scrollY);
    }
    // useEffect(() => {
    //     console.log(scroll);
    // }, [scroll]);
    window.addEventListener('scroll', handleScroll);
    function game(logo, homeAway, opponent, date, score) {
        return (
            <tr className='row'>
                <td><img className='schedule-logo' src={logo} alt={`${opponent} Logo`}/></td>
                <td><span className={homeAway}>{homeAway}</span> {opponent}</td>
                <td>{date}</td>
                <td className={score.charAt(0) == 'W' ? 'win' : score.charAt(0) == 'L' ? 'loss' : ''}>{score}</td>
            </tr>
        )
    }
    return (
        <>
            <header id='Schedule' className='section-header'>Schedule</header>
            <div className='background-container'>
                <img src={frontRink} className={scroll < 3500 ? (scroll > 1600 ? 'image background active' : 'image background') : 'image background'} />
            </div>
            <div className='schedule'>
                <table>
                    <tbody>
                        {game(dartmouth, 'vs', 'Dartmouth College', 'Oct 15/ 12 pm', 'T 3-3')}
                        {game(une, 'vs', 'University of New England', 'Oct 22/ 2 pm', 'W 12-2')}
                        {game(wpi, 'vs', 'Worcester Polytechnic Institute', 'Oct 29/ 2 pm', 'W 3-2')}
                        {game(thomas, 'vs', 'Thomas College', 'Nov 2/ 8:30 pm', 'W 16-2')}
                        {game(bates, 'vs', 'Bates College', 'Nov 5/ 2 pm', 'W 12-4')}
                        {game(dartmouth, 'at', 'Dartmouth College', 'Nov 11/ 1:30 pm', 'L 3-6')}
                        {game(bates, 'vs', 'Bates College', 'Nov 12/ 2 pm', 'W 6-2')}
                        {game(sjc, 'at', "St. Joe's College", 'Nov 18/ 7:30 pm', 'W 12-3')}
                        {game(cmcc, 'vs', 'Central Maine Community College', 'Nov 19/ 2 pm', 'W 2-1')}
                        {game(sjc, 'vs', "St. Joe's College", 'Dec 3/ 2 pm', 'W 10-0')}
                        {game(cmcc, 'vs', 'Central Maine Community College', 'Dec 6/ 8:20 pm', 'W 7-3')}
                        {game(thomas, 'vs', 'Thomas College', 'Dec 7/ 8:30 pm', 'W 9-3')}
                        {game(une, 'at', 'University of New England', 'Jan 27/ 3 pm', 'W 9-1')}
                        {game(wit, 'vs', 'Wentworth Institute of Technology', 'Jan 28/ 2 pm', 'W 6-1')}
                        {game(thomas, 'vs', 'Thomas College', 'Nov 2/ 8:30 pm', 'W 4-1')}
                        {game(bates, 'vs', 'Bates College', 'Feb 9/ 7 pm', 'W 5-0')}
                        {game(arkansas, 'vs', 'University of Arkansas', 'Mar 7/ 2pm', 'L 4-6')}
                        {game(lawrencetech, 'vs', 'Lawrence Tech', 'March 8. 5 pm', 'L 2-5')}
                        {game(saintvincent, 'vs', 'Saint Vincent College', 'March 9/ 11 am', 'L 5-9')}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Schedule;