import React from 'react';
//import CatPhoto from './assets/CatPhoto'
import './App.css';
import CalendarGrid from './components/CalendarGrid';
import CounterContainer from './components/CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CalendarGrid />
          <CounterContainer />
      </header>
    </div>
  );
}

export default App;
