import React from 'react';
import './Shared.scss'
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return(
    <div className='footerWhole'>
      <Container>
        <Row>
          <Col>
            <h3><strong>PRG</strong></h3>
            <h5>Help us, Help you.</h5>
          </Col>

          <Col>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          </Col>

          <Col>
          <h5>
            13688 SW Jenna Ct
            Portland OR, 97223
          </h5>
          <h5>sfgoetz@frontier.com</h5>
          <h5>(503) 222-4320</h5>

          </Col>

          <Col md="auto">
            <p>Social Media 1</p>
            <p>Social Media 2</p>
            <p>Social Media 3</p>
          </Col>
          <Col xs lg="2">
          <a href='#'>Privacy</a>
          <br/>
          <a href='#'>Terms of Use</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;