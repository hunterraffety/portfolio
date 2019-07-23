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
      <div className='footer-container' id='contact'>
        <Row className='justify-content-md-center footer-intro'>
          <Col className='text-center footer-intro-text' md='6'>
            <h1 className='text_shadow'>Get in touch with me.</h1>
          </Col>
        </Row>
        <Row>
          <Form method='post'>
            <Input type='hidden' name='contact' value='contact' />
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='contact_name'>Name</Label>
                  <Input
                    type='name'
                    name='name'
                    id='contact_name'
                    placeholder='Name'
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='email_address'>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    id='email_address'
                    placeholder='email'
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for='comment_text'>Comments</Label>
                  <Input type='textarea' name='text' id='comment_text' />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input type='submit'>Submit</Input>
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
        <Row className='justify-content-md-center'>
          <Col md='6' className='text-center'>
            <h6>&copy; Hunter Raffety | 2019</h6>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
