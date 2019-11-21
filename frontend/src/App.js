/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './components/UI/navbar/NavigationBar';

import SlotMachine from './pages/SlotMachine';
import About from './pages/About';
import LeaderBoard from './pages/LeaderBoard';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route path="/" exact component={SlotMachine} />
      <Route path="/about" exact component={About} />
      <Route path="/scoreboard" exact component={LeaderBoard} />
    </Router>
  );
}

export default App;
