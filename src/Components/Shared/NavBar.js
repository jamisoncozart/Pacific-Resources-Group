import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {

  return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Pacific Resources Group</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">Who We Are</Nav.Link>
      <Nav.Link href="/projects">What We Do</Nav.Link>
      <Nav.Link href="/contacts">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;