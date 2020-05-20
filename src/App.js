import React from 'react';
import './App.css';
import Tonya from "./Tonya/tonya";
import helloWorld from './Assets/helloWorld.png';

function App() {
  return (
    <div>
      <Tonya />
  
      <div className={'footContainer'}>
      
      <div className={'copyright'}> &copy; 1987 Tonya Judkins </div>
      
      <footer className={'footer'}>
        <img src={helloWorld} className={'helloWorld'}/>
      </footer>
      
      </div>
      
    </div>
  );
}

export default App;
