// dependencies
import React from 'react';
import { Card, CardImg, Row, Col } from 'reactstrap';

// components

const Portfolio = props => {
  return (
    <div className='portfolio-container align-items-center' id='portfolio'>
      <Row className='portfolio-text-content justify-content-md-center'>
        <Col className='top' md='auto'>
          <h1 className='text-center'>Finely curated projects.</h1>
        </Col>
      </Row>
      <Row className='justify-content-md-center portfolio-content'>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/technics'
              alt='Card image cap'
            />
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/abstract'
              alt='Card image cap'
            />
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/city'
              alt='Card image cap'
            />
          </Card>
        </Col>
      </Row>
      <Row className='portfolio-text-content justify-content-md-center'>
        <Col className='bottom text-center' md='3'>
          <h6>Use My Tech Stuff</h6>
          <p className='lead text-justify'>
            Use My Tech Stuff is a high-end equipment sharing marketplace. This
            project was built during my third build week at Lambda School with a
            team of 5 developers. It utilizes React, Express, node,
            Styled-Components, Material Design, and has a wide backend set of
            endpoints capturing data in SQLite.
          </p>
        </Col>
        <Col className='bottom text-center' md='3'>
          <h6>Educell</h6>
          <p className='lead text-justify'>
            Educell is a platform for delivering seamless collaboration and
            communication tools for those who have a vested interest in
            positive, student centered outcomes. This was built during my first
            build week at Lambda School. It utilizes JavaScript, SASS, and
            responsive design.
          </p>
        </Col>
        <Col className='bottom text-center' md='3'>
          <h6>React Instagram Clone</h6>
          <p className='lead text-justify'>
            The React Instagram Clone project is a deep dive into React and
            Redux. It was built using functional and class components, as well
            as pulling in data from a backend API. This project was intended to
            mirror the functionality of Instagram as closely as possible.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
