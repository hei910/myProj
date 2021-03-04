import React from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route path="/user/:username" component={User} />
      </header>
    </div>
  );
}

export default App;
