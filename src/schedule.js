import './schedule.css'
import './table.css'
import { useState, useEffect } from 'react';
import frontRink from './images/frontrink.jpg';
import bates from './images/bates.png';
import cmcc from './images/cmcc.png';
import dartmouth from './images/dartmouth.png';
import sjc from './images/sjc.png';
import thomas from './images/thomas.png';
import une from './images/une.png';
import wit from './images/wit.png';
import wpi from './images/wpi.png';
import arkansas from './images/arkansas.png';
import saintvincent from './images/saintvincent.png';
import lawrencetech from './images/lawrencetech.png';
import umass from './images/umass.png';
import curry from './images/curry.png';
import um from './images/um.png';
import unh from './images/unh.png';

import acha2024 from './images/acha2024.png';
function Schedule() {
    //add wins, losses, etc once database table is set up
    const [schedule, setSchedule] = useState();
    const [scheduleYear, setScheduleYear] = useState("2023")
    const [scroll, setScroll] = useState(window.scrollY);
    const image = {
        'bates':bates,
        'cmcc': cmcc,
        'dartmouth': dartmouth,
        'sjc': sjc,
        'thomas': thomas,
        'une': une,
        'wit': wit,
        'wpi': wpi,
        'arkansas': arkansas,
        'saintvincent': saintvincent,
        'lawrencetech': lawrencetech,
        'umass': umass,
        'curry': curry,
        'unh': unh,
        'um': um
    };
    const handleScroll = () => {
        setScroll(window.scrollY);
    }
    useEffect(() => {
        async function getSchedule() {
            try {
                const response = await fetch(`https://colbyclubhockey.com/.netlify/functions/getschedule?year=${scheduleYear}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setSchedule(data);
                }
            }
            catch (error) {
                console.error('Schedule could not be loaded', error);
            }
        }
        getSchedule();
    }, [scheduleYear])

    window.addEventListener('scroll', handleScroll);
    function game(logo, homeAway, opponent, date, score) {
        return (
            <tr className='row'>
                <td><img className='schedule-logo' src={logo} alt={`${opponent} Logo`}/></td>
                <td className='center'>{homeAway == 'nationals'? <img className='schedule-logo' src={acha2024}></img> : <span className={homeAway}>{homeAway}</span> }</td>
                <td>{opponent}</td>
                <td>{date}</td>
                <td className={score.charAt(0) == 'W' ? 'win' : score.charAt(0) == 'L' ? 'loss' : ''}>{score}</td>
            </tr>
        )
    }
    const handleChange = (event)=>{
        setScheduleYear(event.target.value);
    }

    return (
        <>
            <div className='background-container'>
                <img src={frontRink} className={scroll < 3500 ? (scroll > 1600 ? 'image background active' : 'image background') : 'image background'} />
            </div>
            <header id='Schedule' className='section-header'>Schedule</header>
            <select className="dropdown" onChange={handleChange} value = {scheduleYear}>
                <option value="2024">2024 - 2025</option>
                <option value= "2023">2023 - 2024</option>
            </select>
            <div className='schedule'>
                <table>
                    <tbody>
                        {schedule? Object.entries(schedule).map(([id, opponent])=>{
                            return game(image[opponent['logofile']], opponent['location'], opponent['name'], opponent['date'], opponent['score']);
                        }):null}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Schedule;