import React from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';

const Skills = props => {
  return (
    <div className='skills-container' id='skills'>
      <a href='#' className='skills-anchor' id='skills-anchor' />
      <Row className='justify-content-md-center skills-top d-flex align-items-top'>
        <Col md='8' className='text-center about-top'>
          <h1>Skills are not exactly unique</h1>
          <p className='about-text'>
            Technical skills sometimes work best with a combination
            understanding skill application and creativity. This isn't a list of
            skills but rather thoughts on how they apply.
          </p>
        </Col>
      </Row>
      <Row className='justify-content-md-center skills-top d-flex align-items-top'>
        <Col className='text-center skill' md='4'>
          <Card className='justify-content-md-center'>
            <CardText>
              <i className='fab fa-js-square fa-5x' />
              <i class='fab fa-react fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6 className='text-center font-weight-bold'>
                  Frontend Development
                </h6>
                <p className='lead text-left'>
                  There are so many issues that impact users and complex
                  problems that developers encounter every single day. I love
                  writing JavaScript to find solutions to those issues and to
                  solve them in the cleanest and most efficient way possible.
                  One of the most effective approaches for me to solve a problem
                  or challenge is being able to stop and think critically about
                  what needs to be done in a logical way -- then creating a plan
                  to make it happen and thinking about any deviations that come
                  along. Being dynamic and flexible is also useful for being
                  able to view things a different way than normal.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className='text-center skill' md='4'>
          <Card>
            <CardText>
              <i class='fab fa-html5 fa-5x' />
              <i class='fab fa-sass fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6 className='font-weight-bold'>User Experience</h6>
                <p className='lead text-left'>
                  There's a lot of power in elegant design. Things may be simple
                  or they may be complex -- there is always a context that
                  should be considered though. It's a powerful skill to be able
                  to understand what it's like to be a user and to understand
                  their experiences. Being able to visualize things in a
                  different way than others do is a skill that falls outside of
                  the technical realm, but when combined with technical skills
                  can create powerful and meaningful interactions that leave a
                  user with knowledge of why they use an application.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-md-center skills-bottom d-flex align-items-top'>
        <Col className='text-center skill' md='4'>
          <Card>
            <CardText>
              <i class='fab fa-node fa-5x' />
              <i class='fab fa-npm fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6 className='font-weight-bold'>Backend Development</h6>
                <p className='lead text-left'>
                  Having access to complete server-side tasks is what modern web
                  application with JavaScript is all about. In conjunction with
                  the libraries that developers use, node is vital to
                  development web applications that are functional and usable.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className='text-center skill' md='4'>
          <Card>
            <CardText>
              <i class='fal fa-database fa-5x' />
              <i class='fal fa-cloud-upload fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6 className='font-weight-bold'>Data</h6>
                <p className='lead text-left'>
                  It is no surprise that data persistence is absolutely
                  essential to the way that the modern web works. The idea of
                  'saving things' may seem as simple as returning to a shopping
                  cart on on a website. The efforts that go into planning,
                  designing, and implementing data stores can be exceptionally
                  complex. Approaching design in a logical and critical way
                  allows for others following to make sense of the thinking
                  behind implementation.
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
