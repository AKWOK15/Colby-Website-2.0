import './about.css';
import rink from './images/siderink.jpg';
import huddle from './images/huddle.jpg';

function About() {
  return (
    <div>
      <header id="About" className='section-header'>About</header>
      <div className='about'>
        <div className="about-item">
          <div>
            <img src={huddle} className='image' alt='Colby Club Hockey Team Huddle'></img>
            <p>
              In 2020, Colby Club Hockey joined the American Collegiate Hockey Association (ACHA), and in 2021, we joined the Northeast Collegiate Hockey Association (NECHA), a division of the ACHA.
            </p>
            <p>
              Our student leadership team runs all club operations, including game scheduling, budget allocation/distribution, and team events. Meanwhile, our coaching staff focuses on player development and team success.
            </p>
          </div>
        </div>
        <div className='about-item'>
          <img src={rink} className="rink-image image" alt='Colby College Ice Rink'></img>
          <p>
            We practice three times a week at Colby’s Jack Kelly Rink and play a schedule of 12 to 16 games excluding playoffs. Our players have various hockey backgrounds ranging from introductory to prep school and junior hockey, but we welcome everyone regardless of skill level!
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
