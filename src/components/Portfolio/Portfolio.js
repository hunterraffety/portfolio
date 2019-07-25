// dependencies
import React from 'react';
import { Card, CardImg, CardText, Row, Col } from 'reactstrap';

const Portfolio = props => {
  return (
    <div className='portfolio-container align-items-center'>
      <a href='#' className='portfolio-anchor' id='portfolio-anchor' />
      <Row className='portfolio-text-content justify-content-md-center '>
        <Col className='top' md='auto'>
          <h1 className='text-center'>Selected projects</h1>
        </Col>
      </Row>
      <Row className='d-flex justify-content-md-center portfolio-content'>
        <Col md='8'>
          <Card className='card-top'>
            <a
              href='https://ls-umts.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CardImg
                top
                width='100%'
                src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/umts_mu.png'
                alt='Use My Tech Stuff'
              />
            </a>
            <CardText className='text-center'>
              <a
                href='https://ls-umts.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h6 className='font-weight-bold'>Use My Tech Stuff</h6>
              </a>
              <p className='text-left'>
                Use My Tech Stuff is a high-end equipment sharing marketplace.
                This project was built during my third build week at Lambda
                School with a team of 5 developers. It utilizes React, Express,
                node, Styled-Components, Material Design, and has a wide backend
                set of endpoints passing around and capturing data in SQLite.
              </p>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-md-center portfolio-content'>
        <Col md='8'>
          <Card className='card-top'>
            <a
              href='https://hr-buildweek-ui.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CardImg
                top
                width='100%'
                src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/educell_mu.png'
                alt='Educell'
              />
            </a>
            <CardText className='text-center'>
              <a
                href='https://hr-buildweek-ui.netlify.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h6 className='font-weight-bold'>Educell</h6>
              </a>
              <p className='text-left'>
                Educell is a platform for delivering seamless collaboration and
                communication tools for those who have a vested interest in
                positive, student centered outcomes. This was built during my
                first build week at Lambda School. It utilizes JavaScript, SASS,
                and responsive design.
              </p>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-md-center justify-content-xs-center portfolio-content'>
        <Col md='8' xs='auto'>
          <Card className='card-top'>
            <a
              href='https://hr-igclone.netlify.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CardImg
                top
                width='100%'
                src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/insta_mu.png'
                alt='React Instagram Clone'
              />
            </a>
            <CardText className='text-center'>
              <h6 className='font-weight-bold'>
                <a
                  href='https://hr-igclone.netlify.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  React Instagram Clone
                </a>
              </h6>
              <p className='text-left'>
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
      {/* <Col className='justify-content-md-end d-flex align-items-top footer-bottom'>
        <Col className='text-right' md='auto'>
          <a href='#home'>
            <i class='fal fa-arrow-to-top fa-2x' />
          </a>
        </Col>
      </Col> */}
    </div>
  );
};

export default Portfolio;
