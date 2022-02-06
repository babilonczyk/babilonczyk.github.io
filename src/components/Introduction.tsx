import rocket from '../assets/img/rocket.svg';
import arrow from '../assets/img/arrow.png'; 
import IntroductionProps from '../models/IntroductionProps';
import * as constants from '../constants';

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; 
import { faHeart, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Introduction: React.FC<IntroductionProps> = props => {
  
  return (
    <section className="introduction">
      
      <div className='introduction-left'>
        <div className="tag">Full-stack Developer</div> 
        <h2>Simple & Powerful.</h2>
        <h2>Projects with Impact. </h2>

        <p>Hi, I'm a full-stack developer who will design a custom solution for your idea
          & make it fly to the moon!
        </p>

        <a href="/">LET'S CHAT</a>

        <div className="counter">
          <div className="counter-referrals">
              <h4>REFERRALS:</h4>
              <span className='counter-referrals-number'>{constants.referralsCount}</span>
          </div>
          <div className="counter-experience">
              <h4>DEV EXP:</h4>
              <span className='counter-experience-number'>{constants.experienceYears} years</span>
          </div>
        </div>
      </div>

      <div className='introduction-right'>
        <img className='rocket' src={rocket} alt="rocket" />
        <img className='arrow' src={arrow} alt="arrow" />

        <div className='circle-large'></div>

        <div className='circle-small-bk'>
          <FontAwesomeIcon icon={faHeart} />
        </div>

        <div className='circle-small-gn-t'></div>
        <div className='circle-small-gn-tt'></div>
        <div className='circle-small-gn-ttt'></div>

        <div className='circle-small-gn-c'></div>
        <div className='circle-small-gn-cc'></div>

        <div className='circle-small-gn-b'></div>
        <div className='circle-small-gn-bb'></div>
        <div className='circle-small-gn-bbb'></div>

        <div className='circle-github'>
          <a href="https://github.com/babilonczyk" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className='circle-linkedin'>
          <a href="https://www.linkedin.com/in/jan-piotrzkowski-3a8789158" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className='circle-mail'>
          <a href="mailto: piotrzkowski.jan@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>

      <div className="mouse-tag">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </section>
  );
};

export default Introduction;