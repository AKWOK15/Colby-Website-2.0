import './schedule.css';
import './roster.css'
import {useState, useEffect } from 'react';
function Roster() {
    const [roster, setRoster] = useState();
    const [rosterYear, setRosterYear] = useState("2023")
    useEffect(() => {
        async function getRoster() {
            try {
                const response = await fetch(`https://colbyclubhockey.netlify.app/.netlify/functions/getroster?year=${rosterYear}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setRoster(data);
                    // Object.entries(data).map(([id, player])=>{
                    // console.log(player['name']);
                    // player(player['name'], player['position'])
                    // })
                    // console.log(Object.entries(data))
                }
            }
            catch (error) {
                console.error('Roster could not be loaded', error);
            }
        }
        getRoster();
    }, [rosterYear])
    function info(name, number, position, height, weight, hand, town) {
        return (
            <tr className='row'>
                <td className="player-data">{name}</td>
                <td className="player-data">{number}</td>
                <td className="player-data">{position}</td>
                <td className="player-data">{height}</td>
                <td className="player-data">{weight}</td>
                <td className="player-data">{hand}</td> 
                <td className="player-data">{town}</td>
            </tr>
        )
    }
    const handleChange = (event)=>{
        setRosterYear(event.target.value);
    }

    return (
        <>
            <header className='section-header' id='Roster'>Roster</header>
            <select className="roster-year" onChange={handleChange} value = {rosterYear}>
                <option value= "2023">2023 - 2024</option>
                <option value="2022">2022 - 2023</option>
            </select>
            <div className='roster'>
                <table className='player-table'>
                    <tbody> 
                        {info('Player', '#', 'Pos', 'Ht', 'Wt', 'Sh', 'Birthplace')}
                        {info('Aidan Kwok', '5', 'D', '6-0', '195', 'R', 'Emerald Hills')}
                        {roster? Object.entries(roster).map(([id, player]) => {
                            return info(player['name'], player['number'], player['position'], player['height'], player['weight'], player['hand'], player['town']);
                        }):null}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Roster;