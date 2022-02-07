import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"; 
import flag from '../assets/img/poland.svg'; 

const Footer: React.FC = () => {
   
    return (
        <section className="footer"> 
           <div className="footer-wrapper">
               <span>Made with lots of</span>
               <FontAwesomeIcon icon={faHeart} />
               <span>from</span>
               <img src={flag} alt="flag" />
           </div> 
        </section>
    );
  };
  
  export default Footer;