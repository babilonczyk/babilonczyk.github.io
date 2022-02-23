/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 
const Services: React.FC  = () => {
  
    return (
        <section className="services" id="services">
            <Tabs className="services-wrapper">
                <div className="services-left">
                    <h2>Services</h2>

                    <TabList className="services-btns">
                        <Tab className="services-btn">
                            <h4>Front-end</h4>
                            <span>Making beautiful front-ends</span>  
                        </Tab>
    
                        <Tab className="services-btn">
                            <h4>Back-end</h4>
                            <span>Building powerful back-ends</span>
                        </Tab>
    
                        <Tab className="services-btn">
                            <h4>Blockchain</h4>  
                            <span>Coming Soon</span> 
                        </Tab>
                    </TabList>
                </div>

                <div className="services-right">
                    <div className="services-content">
                        <TabPanel className="services-content-panel">
                            <h4>Front-end</h4>
                            <p>Websites that attract and maintain the attention of a viewer are the result
                               I want to accomplish every time I start working on a new project. I'm using 
                                <strong> CSS/SCSS</strong>, <strong>Javascript/Typescript</strong> to make that magic!
                            </p>
                        </TabPanel>
                        <TabPanel className="services-content-panel">
                            <h4>Back-end</h4>
                            <p>Almost every web application needs a database, or a different place to store user information 
                                as well as a way to intearact with it later on. I use <strong>Ruby on Rails</strong> or 
                                <strong> Node.js/Express.js</strong> for that. 
                            </p>
                        </TabPanel>
                        <TabPanel className="services-content-panel">
                            <h4>Blockchain</h4>
                            <p>Blockchain technology starts to get more use cases that can be implemented in 
                                web applications with each passing year. With some people even preferring to 
                                pay for services using crypto. Gaining commercial experience in this area is 
                                something I'm deeply interested in.
                            </p>
                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </section>
    );
  };
  
  export default Services;