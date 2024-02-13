import './schedule.css'
function Schedule() {
    function game(logo, homeAway, opponent, date, score) {
        return (
            <tr className='row'>
                <td className='schedule'><img className='schedule-logo' src={logo} /></td>
                <td><span className={homeAway}>{homeAway}</span> {opponent}</td>
                <td>{date}</td>
                <td className= {score.charAt(0) =='W'?'win':score.charAt(0) =='L'?'loss':''}>{score}</td>
            </tr>
        )
    }
    return (
        <>
            <header id='Schedule' className='class-header'></header>
            <table>
                <tbody>
                    {game('dartmouthlogo.png', 'vs', 'Dartmouth College', 'Oct 15/ 12 pm', 'T 3-3')}
                    {game('unelogo.png', 'vs', 'University of New England', 'Oct 22/ 2 pm', 'W 12-2')}
                    {game('wpilogo.png', 'vs', 'Worcester Polytechnic Institute', 'Oct 29/ 2 pm', 'W 3-2')}
                    {game('thomaslogo.png', 'vs', 'Thomas College', 'Nov 2/ 8:30 pm', 'W 16-2')}
                    {game('bateslogo.svg', 'vs', 'Bates College', 'Nov 5/ 2 pm', 'W 12-4')}
                    {game('dartmouthlogo.png', 'at', 'Dartmouth College', 'Nov 11/ 1:30 pm', 'L 3-6')}
                    {game('bateslogo.svg', 'vs', 'Bates College', 'Nov 12/ 2 pm', 'W 6-2')}
                    {game('sjclogo.png', 'at', "St. Joe's College", 'Nov 18/ 7:30 pm', 'W 12-3')}
                    {game('cmcclogo.png', 'vs', 'Central Maine Community College', 'Nov 19/ 2 pm', 'W 2-1')}
                    {game('sjclogo.png', 'vs', "St. Joe's College", 'Dec 3/ 2 pm', 'W 10-0')}
                    {game('cmcclogo.png', 'vs', 'Central Maine Community College', 'Dec 6/ 8:20 pm', 'W 7-3')}
                    {game('thomaslogo.png', 'vs', 'Thomas College', 'Dec 7/ 8:30 pm', 'W 9-3')}
                    {game('unelogo.png', 'at', 'University of New England', 'Jan 27/ 3 pm', 'W 9-1')}
                    {game('witlogo.svg', 'vs', 'Wentworth Institute of Technology', 'Jan 28/ 2 pm', 'W 6-1')}
                    {game('thomaslogo.png', 'vs', 'Thomas College', 'Nov 2/ 8:30 pm', 'W 4-1')}
                    {game('bateslogo.svg', 'vs', 'Bates College', 'Feb 9/ 7 pm', 'W 5-0')}


                </tbody>
            </table>
        </>
    );
}

export default Schedule;