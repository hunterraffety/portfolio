import React from 'react';
import StickyFooter from 'react-sticky-footer';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function App() {
  return (
    <div class='footer-margin'>
      <StickyFooter
        bottomThreshold={30}
        normalStyles={{
          backgroundColor: 'rgb(34, 40, 51)',
          padding: '1rem 2rem'
        }}
        stickyStyles={{
          padding: '1rem 2rem'
        }}
      >
        <Row>
          <Col className='text-right' md='auto'>
            <a href='#home'>
              <i class='fal fa-arrow-to-top fa-2x dark' />
            </a>
          </Col>
        </Row>
      </StickyFooter>
    </div>
  );
}
