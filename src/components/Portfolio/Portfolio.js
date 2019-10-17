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
              href='https://endrsd.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CardImg
                top
                width='100%'
                src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/endrsd.png'
                alt='endrsd'
              />
            </a>
            <CardText className='text-center'>
              <a
                href='https://endrsd.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h6 className='font-weight-bold'>endrsd</h6>
              </a>
              <p className='text-left'>
                endrsd.com is a{' '}
                <a href='https://lambdaschool.com/'>Lambda School</a> Labs (8
                week capstone experience) product that serves as my capstone
                project for my time at Lambda. Lambda School is/was our
                stakeholder.{' '}
                <a
                  href='https://www.youtube.com/watch?v=V7-QyGETHas'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View our product showcase.
                </a>
              </p>
              <br />
              <p className='text-left'>
                endrsd seeks to bridge the gap between technical curriculum and
                career focused curriculum by solving the problem of of allowing
                students to track and monitor their progress through the career
                endorsement process independently. It also provides a career
                coach dashboard to monitor, track, and reach out to students.
              </p>
              <br />
              <p className='text-left'>
                My contributions to this product among a team of 9 incredibly
                talented engineers (6 full-stack web, 3 iOS) -- are in every
                area of the full-stack web application. I helped architect the
                front-end and back-end application through 2 product release
                cycles and multiple product canvases. We also developed in
                parallel with{' '}
                <a
                  href='https://apps.apple.com/us/app/endrsd/id1477644496?app=itunes&ign-mpt=uo%3D4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  a fully native iOS app.
                </a>
              </p>
            </CardText>
          </Card>
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
              <br />
              <p className='text-left'>
                This full stack application was developed using React, Express
                and PostGres for the data provider. A fully-functional backend
                API was written to connect the front-end web application
                utilizing knex to the PostGres database to warehouse our
                information. I contributed to the front-end react application
                among a team of 3 engineers.
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
              <br />
              <p className='text-left'>
                This was a project that was built for a stakeholder that
                endeavors to connect low-income communities in developing
                countries with a team of professionals to facilitate the
                learning of their student.
              </p>
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
