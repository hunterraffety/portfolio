import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Obfuscate from 'react-obfuscate';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: []
    };
  }

  render() {
    return (
      <div className='footer-container'>
        <a href='#' className='contact-anchor' id='contact-anchor' />
        <Row className='justify-content-center footer-intro'>
          <Col className='text-center footer-intro-text' md='6'>
            <h1>Get in touch with me.</h1>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col md='6' className='text-center footer-bottom'>
            <h6 class='obfuscated-email'>
              <address>
                or email: <Obfuscate email='hsraffety@gmail.com' />
              </address>
              <p class='copy-text'>&copy; Hunter Raffety | 2019</p>
            </h6>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
