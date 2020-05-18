import React from 'react';
import logo from '../../Assets/PRG.png';
import './Shared.scss'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavBar() {

  return (
    <div className='navWhole'>
      <Nav activeKey="/splash">
        <img className='logoStyle' src={logo} alt='Business Logo'/>
        <Nav.Item>
          <Nav.Link className='navStyle' href="/splash">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navStyle' href="/about">Who We Are</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link className='navStyle' href="/projects">What We Do</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link className='navStyle' href="/contacts">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;