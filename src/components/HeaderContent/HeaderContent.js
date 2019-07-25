// dependencies
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default function HeaderContent() {
  return (
    <Container className='hc-container'>
      <Row className='cta-middle-row'>
        <Col className='cta-middle text-md-left' auto='true'>
          <p>
            <span className='emphasis-lg'>Hi! I'm Hunter. </span>
            <span className='emphasis-md'>
              I'm a full-stack engineer from Phoenix, Arizona.
            </span>
          </p>
          <p className='cta-button text-left text-xs-center'>
            <a href='#portfolio-anchor' className='button '>
              Selected Works
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
