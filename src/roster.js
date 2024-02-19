import './schedule.css'
function Roster() {
    function player(name, position) {
        return(
            <tr class='row'>
                <td>{name}</td>
                <td>{position}</td>
            </tr>
        )
    }
    return (
        <>
            <header class='section-header' id='Roster'>Roster</header>
            <table class="roster-table">
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