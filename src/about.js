import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons'
import PhotoCarousel from './photo-carousel';
function About() {
  return (
    <div>
      <div className="about">
        {/* <PhotoCarousel /> */}
        <img src='mitch.png' className='image'></img>
        <div>
          <header id="About" className='class-header'>About Us</header>
          <p className='quote'>
            Quote
          </p>
          <p>
            In 2020, we received membership into the American Collegiate Hockey Association (ACHA), and in 2021, we joined the Northeast Collegiate Hockey Association (NECHA), a division of the ACHA. 
          </p>  
          <p>
            We practice three times a week at Colby’s Jack Kelly Rink and play a schedule of 12 to 16 games. Our players have various hockey backgrounds ranging from introductory to prep school and junior hockey, but we welcome everyone regardless of skill level! 
          </p>
          <p>
            Our student leadership team runs all club operations, including game scheduling, budget allocation/distribution, and team events. Meanwhile, our coaching staff focuses on player development and team success.
          </p>
        </div>
        {/* <ul className='about-list'>
          <header id="About" className='class-header'>About Us</header>
          <li><FontAwesomeIcon className="icon" icon={faHockeyPuck} />Members of the Northeast Collegiate Hockey Association of the ACHA</li>
          <li><FontAwesomeIcon className="icon" icon={faHockeyPuck} />3 On Campus Practices Per Week</li>
          <li><FontAwesomeIcon className="icon" icon={faHockeyPuck} />12 to 16 Game Schedule</li>
          <li><FontAwesomeIcon className="icon" icon={faHockeyPuck} />All Skill Levels Welcome</li>
          <li><FontAwesomeIcon className="icon" icon={faHockeyPuck} />Club operations handled by students</li>
          <li><FontAwesomeIcon className="icon" icon={faHockeyPuck} />Team success handled by coaches</li>
        </ul> */}
      </div>
    </div>
  );
}

export default About;
