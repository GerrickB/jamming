import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracklist from '../Tracklist/Tracklist';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Tracklist />
        <button>Save To Spotify</button>
        <button>Search</button>
      </header>
      
    </div>
  );
}
