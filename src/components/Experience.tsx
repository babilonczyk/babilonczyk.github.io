import curve from '../assets/img/curve.png'; 

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Experience: React.FC  = () => {
  
    return (
        <Tabs className="experience" id="experience">

            <h2>My Experience</h2>

            <div className="experience-box">

                <TabList className="experience-box-nav">
                    <h4>When?</h4>

                    <Tab className="experience-btn">
                        <div className="experience-btn-state"></div>
                        <h5>2022</h5>
                    </Tab>
                    <Tab className="experience-btn">
                        <div className="experience-btn-state"></div>
                        <h5>2021</h5>
                    </Tab>
                    <Tab className="experience-btn">
                        <div className="experience-btn-state"></div>
                        <h5>2020</h5>
                    </Tab>
                </TabList>

                <div className="experience-box-content">
                    <div className="experience-box-content-box">
                        <TabPanel className="experience-box-content-panel">
                            <h5>2022</h5>
                            <h4>Now</h4>
                            <p>Lorem Ipsum is simply dummy text of the. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </TabPanel>
                        <TabPanel className="experience-box-content-panel">
                            <h5>2021</h5>
                            <h4>First Job & Eng. Degree</h4>
                            <p>Lorem Ipsum  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </TabPanel>
                        <TabPanel className="experience-box-content-panel">
                            <h5>2020</h5>
                            <h4>University</h4>
                            <p>Lorem. Lorem Ipsum has been the industry's standard dummy texIpsum is simply dummy text of the printing and typesetting industry took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </TabPanel>
                    </div>

                    <div className="gn-ball-r"></div>
                    <img className='curve' src={curve} alt="curve" />
                </div>

            </div>
        </Tabs>
    );
  };
  
  export default Experience;