import React from 'react';
import logo from '../../Assets/PRG.png';
import './Shared.scss'
import { Nav } from 'react-bootstrap';

function NavBar() {

  const styles = {
    background: 'rgba(73, 114, 122, 0.5)',
    color: 'white'
  }
  
  const logoStyle = {
    width: '5%',
    height: '5%'
  }

  return (
    <div style={styles}>
      <Nav className="mr-auto">
        <img style={logoStyle} src={logo} alt='Business Logo'/>
        <Nav.Link className='navStyle' href="/">Home</Nav.Link>
        <Nav.Link className='navStyle' href="/about">Who We Are</Nav.Link>
        <Nav.Link className='navStyle' href="/projects">What We Do</Nav.Link>
        <Nav.Link className='navStyle' href="/contacts">Contact Us</Nav.Link>
      </Nav>
    </div>
  );
}

export default NavBar;