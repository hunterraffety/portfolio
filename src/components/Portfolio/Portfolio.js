// dependencies
import React from 'react';
import { Card, CardImg, CardText, Row, Col } from 'reactstrap';

const Portfolio = props => {
  return (
    <div className='portfolio-container align-items-center'>
      <a href='#' className='portfolio-anchor' id='portfolio-anchor' />
      <Row className='portfolio-text-content justify-content-md-center '>
        <Col className='top' md='auto'>
          <h1 className='text-center'>I like to create.</h1>
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
                Members can rent a variety of gear from a community of equipment
                owners across the US. You’ll be able to choose from a diverse
                selection of cameras, laptops, speakers, monitors, and more in
                whatever city you want.
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
                positive, student centered outcomes.
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
                  Instagram Clone
                </a>
              </h6>
              <p className='text-left'>
                Most people know what Instagram is! It's a social media platform
                that allow users to post media, share comments and user posts,
                as well as like posts.
              </p>
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
