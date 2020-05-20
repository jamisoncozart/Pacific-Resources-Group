import React from 'react';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import SplashBody from './Splash/SplashBody';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import AboutUs from './Contacts/AboutUs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.scss';

function App() {
  return(
    <Router>
      <Header />
      <Switch>

        <Route path='/about'>
          <AboutUs />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/'>
          <SplashBody />
        </Route>
      
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;