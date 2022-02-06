import me from '../assets/img/me.png'; 

const AboutMe = () => {
   
    return (
        <section className="about-me" id="about-me"> 
       
            <div className="about-me-left">
                <div className="img-wrapper">
                    <img src={me} alt="jan piotrzkowski" /> 
                </div>
            </div>

            <div className="about-me-right">

                <h2>About Me</h2>

                <p className="about-me-paragraph">
                    I'm a young developer looking for challenging projects that could broaden my 
                    horizons as well as sharpen my skillset. Energy drinks and coffee gives me power 
                    to do unachievable things.
                </p>

                <p className="about-me-paragraph">
                    My area of expertise is in web development. I know both back-end technologies like 
                    Ruby on Rails or Node.js/Express.js and front-end libraries like React.js and Typescript. 
                </p>

                <p className="about-me-paragraph">I'm always striving to use the latest technologies 💪.</p>

                <div></div>
            </div>
        </section>
    );
  };
  
  export default AboutMe;