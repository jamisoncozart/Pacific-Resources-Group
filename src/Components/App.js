import React from 'react';
import NavBar from './Shared/NavBar'
import HamburgerMenu from './Menu/HamburgerMenu'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';

function App() {
  return(
    <Router>
      <HamburgerMenu />
    </Router>
  )
}

export default App;
