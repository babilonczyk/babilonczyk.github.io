/* eslint-disable jsx-a11y/alt-text */

import TechesProps from '../models/TechesProps';

const Teches: React.FC<TechesProps> = props => {
   
    return (
        <section className="teches" id="teches"> 
            <ul className="teches-wrapper">
                {props.items.map((tech) =>  (
                   <li className="tech" key={tech.id}>
                        <img src={tech.link} />
                        <span>{tech.name}</span>
                    </li>
                ))}
            </ul> 
        </section>
    );
  };
  
  export default Teches;