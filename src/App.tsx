import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Teches from './components/Teches';
import Services from './components/Services';
import * as constants from './constants';
import Experience from './components/Experience';

function App() { 
  return (
    <div className="App">
      
      < Navbar />
      
      < Introduction experience={constants.experienceYears} referrals={constants.referralsCount} />

      < AboutMe />

      < Teches items={constants.teches.items}/>

      < Services />

      < Experience />

    </div>
  );
}

export default App;
