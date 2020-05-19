import React from 'react';
import CatPhoto from './assets/CatPhoto'
import './App.css';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi ya Sean! Let's Get Started!
        </p>
        <p>
          (We will likely need to clean out a bunch of the React garbage)
        </p>
        <Note/>
        <div className="App-logo">
          <CatPhoto alt="logo" />
        </div>
        </header>
    </div>
  );
}

export default App;
