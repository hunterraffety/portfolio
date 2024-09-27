// dependencies
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function HeaderContent() {
  return (
    <Container className='hc-container'>
      <Row className='cta-middle-row'>
        <Col className='cta-middle text-md-left' auto='true' sm='12'>
          <p>
            <span className='emphasis-lg'>Hello. I'm Hunter! </span>
            <p>
              <span className='emphasis-md'>
                I'm a Full-Stack Software Engineer from the New YorK City area.
              </span>
            </p>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
