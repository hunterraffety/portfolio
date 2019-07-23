import React from 'react';
import { Row, Col } from 'reactstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: []
    };
  }

  render() {
    return (
      <div className='footer-container' id='footer'>
        <Row className='justify-content-md-center footer-intro'>
          <Col className='text-center footer-intro-text' md='6'>
            <h1>Feel like learning more?</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
