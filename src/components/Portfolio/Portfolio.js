// dependencies
import React from 'react';
import { Card, CardImg, CardText, Row, Col } from 'reactstrap';

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
              src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/umts-t.png'
              alt='Use My Tech Stuff'
            />
            <CardText className='text-center'>
              <h6 className='font-weight-bold'>Use My Tech Stuff</h6>
              <p className='text-justify'>
                Use My Tech Stuff is a high-end equipment sharing marketplace.
                This project was built during my third build week at Lambda
                School with a team of 5 developers. It utilizes React, Express,
                node, Styled-Components, Material Design, and has a wide backend
                set of endpoints capturing data in SQLite.
              </p>
            </CardText>
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/educell-r.png'
              alt='Educell'
            />
            <CardText className='text-center'>
              <h6 className='font-weight-bold'>Educell</h6>
              <p className='text-justify'>
                Educell is a platform for delivering seamless collaboration and
                communication tools for those who have a vested interest in
                positive, student centered outcomes. This was built during my
                first build week at Lambda School. It utilizes JavaScript, SASS,
                and responsive design.
              </p>
            </CardText>
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/react-insta-r.png'
              alt='React Instagram Clone'
            />
            <CardText className='text-center'>
              <h6 className='font-weight-bold'>React Instagram Clone</h6>
              <p className='text-justify'>
                The React Instagram Clone project is a deep dive into React and
                Redux. It was built using functional and class components, as
                well as pulling in data from a backend API. This project was
                intended to mirror the functionality of Instagram as closely as
                possible.
              </p>
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
