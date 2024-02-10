import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHockeyPuck} from '@fortawesome/free-solid-svg-icons'
function About() {
  return (
    <div id="About" className="about">
      <li><FontAwesomeIcon className="icon" icon={faHockeyPuck}/>Members of the Northeast Collegiate Hockey Association of the ACHA</li>
      <li><FontAwesomeIcon className="icon" icon={faHockeyPuck}/>3 On Campus Practices Per Week</li>
      <li><FontAwesomeIcon className="icon" icon={faHockeyPuck}/>12 to 16 Game Schedule</li>
      <li><FontAwesomeIcon className="icon" icon={faHockeyPuck}/>All Skill Levels Welcome</li>
      <li><FontAwesomeIcon className="icon" icon={faHockeyPuck}/>Club operations handled by students</li>
      <li><FontAwesomeIcon className="icon" icon={faHockeyPuck}/>Team success handled by coaches</li>
    </div>
  );
}

export default About;
