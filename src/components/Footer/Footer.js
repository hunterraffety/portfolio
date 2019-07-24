import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        <Row className='justify-content-md-center footer-intro'>
          <Col className='text-center footer-intro-text' md='6'>
            <h1 className='text_shadow'>Get in touch with me.</h1>
          </Col>
        </Row>
        <Row>
          <Form method='post'>
            <input type='hidden' name='form-name' value='contact' />
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input type='name' name='name' id='name' placeholder='Name' />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email'
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for='text'>Comments</Label>
                  <Input type='textarea' name='text' id='text' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type='submit'>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Row>
        <Row className='justify-content-md-center social social-line'>
          <Col md='6' className='text-center pad-top'>
            <a
              href='https://github.com/hunterraffety'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i class='fab fa-github' />
            </a>
            <a
              href='https://linkedin.com/in/huntersraffety'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              href='https://twitter.com/_hunterraffety'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i class='fab fa-twitter' />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='text-right'>
            <a href='#home'>
              <i class='fal fa-arrow-to-top fa-2x' />
            </a>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col md='6' className='text-center footer-bottom'>
            <h6>&copy; Hunter Raffety | 2019</h6>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
