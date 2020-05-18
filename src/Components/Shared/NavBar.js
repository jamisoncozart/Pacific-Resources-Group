import React from 'react';
import logo from '../../Assets/PRG.png';
import './Shared.scss'
import { Nav } from 'react-bootstrap';

function NavBar() {

  const styles = {
    background: 'rgba(13, 66, 48)',
    color: 'white'
  }

  return (
    <div className='navWhole'>
      <img className='logoStyle' src={logo} alt='Business Logo'/>
      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link className='navStyle' href="/">Home</Nav.Link>
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