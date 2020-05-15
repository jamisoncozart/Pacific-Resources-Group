import React from 'react';
import NavBar from './Shared/NavBar';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../App.scss';

function App() {
  return(
    <Router>
      <Header />
      <NavBar />

      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

export default App;