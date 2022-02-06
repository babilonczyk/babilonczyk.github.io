import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Teches from './components/Teches';
import Services from './components/Services';

function App() { 
  return (
    <div className="App">
      
      < Navbar />
      
      < Introduction />

      < AboutMe />

      < Teches />

      < Services />

    </div>
  );
}

export default App;
