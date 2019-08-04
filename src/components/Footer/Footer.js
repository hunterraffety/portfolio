import React from 'react';
import { Row, Col } from 'reactstrap';
import Obfuscate from 'react-obfuscate';

function Footer() {
  return (
    <div className='footer-container'>
      <a href='#' className='contact-anchor' id='contact-anchor' />
      <Row className='justify-content-center footer-intro'>
        <Col className='text-center footer-intro-text' md='6'>
          <h1 className='text_shadow'>Let's talk!</h1>
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col md='6' className='text-center footer-bottom'>
          <h6 class='obfuscated-email'>
            My name is Hunter! You remember, right?
            <address>
              email - <Obfuscate email='hsraffety@gmail.com' />
            </address>
          </h6>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
