import React from 'react';
import { Row, Col } from 'reactstrap';

function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <a href='#skills-anchor' className='skills-anchor' id='skills-anchor' />
      <Row className='d-flex justify-content-center'>
        <Col md='12' sm='12' className='d-flex justify-content-center'>
          <h1 className='skills-header'>Skills & interests.</h1>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col md='4' className='d-flex justify-content-center'>
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
              <li>Python</li>
              <li>Django</li>
              <li>HTML & CSS (SASS)</li>
            </ul>
          </p>
        </Col>
        <Col md='4' className='d-flex justify-content-center'>
          <p className='about-text'>
            I also have a lot of personal interests!
            <ul>
              <li>Performing stand-up comedy</li>
              <li>Working on vehicles</li>
              <li>Subarus</li>
              <li>Creating music with friends</li>
              <li>Performing card magic</li>
              <li>Exploring new restaurants</li>
              <li>Academia</li>
              <li>Dogs.</li>
              <li>Pick-up basketball</li>
              <li>Snowboarding / skateboarding</li>
            </ul>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
