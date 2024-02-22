import './schedule.css'
function Roster() {
    function player(name, position) {
        return(
            <tr className='row'>
                <td>{name}</td>
                <td>{position}</td>
            </tr>
        )
    }
    return (
        <>
            <header className='section-header' id='Roster'>Roster</header>
            <table className="roster-table">
                <tbody>
                    {player('Aidan Aggarwal')}
                    {player('Gabrielle Anusbigian')}
                    {player('John Bloomer')}
                    {player('Bear Brooks')}
                    {player('Brendan Bullock')}
                    {player('Mitchell Ham')}
                </tbody>
            </table>
        </>
    )
}
export default Roster;