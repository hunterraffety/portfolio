import React from 'react';
import { Row, Col } from 'reactstrap';

function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <a href='#' className='skills-anchor' id='skills-anchor' />
      <Row className='d-flex justify-content-center skills-top'>
        <Col className='d-flex justify-content-center'>
          <h1>Skills & interests.</h1>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center skills-top'>
        <Col md='4' sm='12' className='about-col d-flex justify-content-center'>
          <p className='about-text'>
            I love building things with technology!
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node</li>
              <li>Express</li>
              <li>API Development</li>
              <li>Postgres | Sqlite3 | Mongo</li>
              <li>HTML & CSS (SASS)</li>
            </ul>
          </p>
        </Col>{' '}
        <Col md='4' sm='12' className='about-col d-flex justify-content-center'>
          <p className='about-text'>
            I have a lot of interests as well!
            <ul>
              <li>Performing stand-up comedy</li>
              <li>Working with others</li>
              <li>Academia</li>
              <li>Creating music with friends</li>
              <li>Exploring new restaurants</li>
              <li>Working on cars</li>
              <li>Learning new things</li>
              <li>Pick-up basketball</li>
            </ul>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
