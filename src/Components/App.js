import React from 'react';
import NavBar from './Shared/NavBar';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.css';

function App() {
  return(
    <Router>
      <Header />
      <NavBar />
      <Footer />
    </Router>
  )
}

export default App;