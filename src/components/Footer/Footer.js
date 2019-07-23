import React from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

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
        <Row className='justify-content-md-center'>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='exampleEmail'>Name.</Label>
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
                  <Label for='email_address'>Email.</Label>
                  <Input
                    type='email'
                    name='email'
                    id='email_address'
                    placeholder='email'
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col>
                <FormGroup className='w-100'>
                  <Label for='exampleText'>Comments.</Label>
                  <Input type='textarea' name='text' id='exampleText' />
                </FormGroup>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col>
                <Button>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    );
  }
}

export default Footer;
