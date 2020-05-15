import React from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {

  return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Pacific Resources Group</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Who We Are</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
      {/* <NavDropdown title="Dropdown Placeholder" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Placeholder</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another Placeholder</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something Placeholder</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated Placeholder</NavDropdown.Item>
      </NavDropdown> */}
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