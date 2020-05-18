import React from 'react';
import logo from '../../Assets/PRG.png'
import { Nav } from 'react-bootstrap';

function NavBar() {

  const styles = {
    background: 'rgba(69, 81, 99, 0.9)',
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
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">Who We Are</Nav.Link>
        <Nav.Link href="/projects">What We Do</Nav.Link>
        <Nav.Link href="/contacts">Contact Us</Nav.Link>
      </Nav>
    </div>
  );
}

export default NavBar;