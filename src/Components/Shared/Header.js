import React from 'react';
import './Shared.scss';
import logo from '../../Assets/PRG.png';
import { Button } from 'react-bootstrap';

function Header() {
  return(
    <div className='headerWhole'>
      <div className='headerBackground'>
        <h1 id='title'>Pacific Resources Group<img className='logoStyle' src={logo} alt='Business Logo'/></h1>
        <div className='buttons'>
          <Button id='button1' href="/splash" variant="outline-light">Home</Button>
          <Button id='button2' href="/projects" variant="outline-light">What We Do</Button>
          <Button id='button3' href="/about" variant="outline-light">Who We Are</Button>
          <Button id='button4' href="/contacts" variant="outline-light">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;