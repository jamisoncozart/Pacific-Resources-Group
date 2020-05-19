import React from 'react';
import './Shared.scss'
import { Nav } from 'react-bootstrap';

function NavBar() {

  return (
    <div className='navWhole'>
      <Nav className="justify-content-center" activeKey="/splash">
        <Nav.Item>
          <Nav.Link className='navStyle' href="/splash">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link className='navStyle' href="/projects">What We Do</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navStyle' href="/about">Who We Are</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         <Nav.Link className='navStyle' href="/contacts">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;