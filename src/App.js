import React, { useState} from 'react'

import './App.css';

import Greeting from './components/Greeting'
import Status from './components/Status'
import InteractiveWidget from './components/InteractiveWidget'
import Configurator from './components/Configurator'




function App() {
  return (
    <div className="App">
        <Greeting />
        <Status />
        <InteractiveWidget />
        <Configurator />
    </div>
  );
}

export default App;
