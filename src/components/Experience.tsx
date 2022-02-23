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
                            <h4>What now?</h4>
                            <p>
                              Right now, my eyes are set on gaining experience in web3 and blockchain 
                              as well as improving my existing skills in Typescript / ExpressJS and several other technologies.
                              <br /><br />
                            </p>
                        </TabPanel>
                        <TabPanel className="experience-box-content-panel">
                            <h5>2021</h5>
                            <h4>First Job & Eng. Degree</h4>
                            <p>
                                At the begining of the 2021 I got the opportuninty to start working on the inteligent legal aid system 
                                for a project called Lemkin. I've been responsible for implementing new functionalities using ruby in Hanami 
                                framework.
                                <span></span>
                                It was also a time, when I started getting interested in crypto and blockchain technologies. I've decided to start learning new
                                technological stack (Typescript / React / NodeJS / ExpressJS).
                                <span></span>
                                I've also finished my bachelor's degree at the end of that year.
                            </p>
                        </TabPanel>
                        <TabPanel className="experience-box-content-panel">
                            <h5>2020</h5>
                            <h4>University Time</h4> 
                            <p>
                                2019-2020 were the years when I've started getting interested in web technologies. Especially Ruby 
                                and Ruby on Rails.
                                <span></span>
                                I've spend that time working as a Sushi Master (thats right :P), studing, getting bunch of 
                                certification courses like Scrum Master Certified, Prince2 Fundamentals or AgilePM Fundamentals and
                                learning Ruby/Ruby on Rails on my own. 
                            </p>
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