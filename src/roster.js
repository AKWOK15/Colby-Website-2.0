import './schedule.css';
import './roster.css'
import {useState, useEffect } from 'react';
function Roster() {
    const [roster, setRoster] = useState();
    const [rosterYear, setRosterYear] = useState("2023")
    useEffect(() => {
        async function getRoster() {
            try {
                const response = await fetch('https://colbyclubhockey.netlify.app/.netlify/functions/getroster', {
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
                <td>{name}</td>
                <td>{number}</td>
                {/* <td>{position}</td>
                <td>{height}</td>
                <td>{weight}</td>
                <td>{hand}</td> */}
                <td>{town}</td>
            </tr>
        )
    }
    const handleChange = (event)=>{
        setRosterYear(event.target.value);
    }
    useEffect(
        Object.entries(roster).map(([id, player]) => {
            {/* return info(player['name'], player['number'], player['position'], player['height'], player['weight'], player['hand'], player['town']); */}
            console.log(player['name']);
    }, [roster]));
    return (
        <div className='roster'>
            <header className='section-header' id='Roster'>Roster</header>
            <table className="roster-table">
                <tbody> 
                    <tr>
                        {/* tr can only contain td */}
                        <td>
                            <select className="roster-year" onChange={handleChange} value = {rosterYear}>
                                <option value= "2023">2023 - 2024</option>
                                <option value="2022">2022 - 2023</option>
                            </select>
                        </td>
                    </tr>
                    {roster? Object.entries(roster).map(([id, player]) => {
                        {/* return info(player['name'], player['number'], player['position'], player['height'], player['weight'], player['hand'], player['town']); */}
                        return info(player['name']);
                    }):null}
                    {/* {player('Aidan Aggarwal')}
                    {player('Gabrielle Anusbigian')}
                    {player('John Bloomer')}
                    {player('Bear Brooks')}
                    {player('Brendan Bullock')}
                    {player('Mitchell Ham')} */}
                </tbody>
            </table>
        </div>
    )
}
export default Roster;