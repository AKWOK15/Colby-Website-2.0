import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons'
import PhotoCarousel from './photo-carousel';
function About() {
  return (
    <div>
      <header id="About" className='section-header'>About</header>
      <div className='about'>
        <div className="about-item">
          <div>
            <img src='ANW_4553.jpg' className='image'></img>
            <p>
              In 2020, we received membership into the American Collegiate Hockey Association (ACHA), and in 2021, we joined the Northeast Collegiate Hockey Association (NECHA), a division of the ACHA.
            </p>
            <p>
              Our student leadership team runs all club operations, including game scheduling, budget allocation/distribution, and team events. Meanwhile, our coaching staff focuses on player development and team success.
            </p>
          </div>
        </div>
        <div className='about-item'>
          <img src='rink.png' className="rink-image image"></img>
          <p>
            We practice three times a week at Colby’s Jack Kelly Rink and play a schedule of 12 to 16 games excluding playoffs. Our players have various hockey backgrounds ranging from introductory to prep school and junior hockey, but we welcome everyone regardless of skill level!
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
