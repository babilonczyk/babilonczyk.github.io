import heart from '../assets/img/red-heart.svg'; 
import flag from '../assets/img/poland.svg'; 

const Footer: React.FC = () => {
   
    return (
        <section className="footer"> 
           <div className="footer-wrapper">
                <span>Made with lots of</span>
                <img src={heart} alt="flag" />
                <span>from</span>
                <a href="https://en.wikipedia.org/wiki/Poland">
                    <img src={flag} alt="flag" />
                </a>
           </div> 
        </section>
    );
  };
  
  export default Footer;