import React from 'react';
import { Card, CardText, CardBody, Container, Row, Col } from 'reactstrap';

const Skills = props => {
  return (
    <Container fluid className='skills-container' id='skills'>
      <a href='#' className='skills-anchor' id='skills-anchor' />
      <Row className='d-flex justify-content-center  align-items-start'>
        <Col md='4'>
          <h1 className='skills-unique'>I do</h1>
        </Col>
      </Row>
      <Row className='d-flex flex-row justify-content-center  align-items-start'>
        <Col md='6'>asd</Col>
        <Col md='6'>asd</Col>
      </Row>
    </Container>
  );
};

export default Skills;
