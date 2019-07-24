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
                  There's a lot of power in elegant but functional design --
                  despite working with things that can be conceptually
                  simplistic or complex. No matter the case however there is
                  always a user context that should be considered during
                  development. It's not the most common skill to have the
                  ability as a developer to have a vision and then to execute it
                  in a meaningful way for users. Being able to visualize things
                  in a different way than others do is a skill that isn't overly
                  technical in nature, but when combined with technical skills,
                  can create powerful interactions that leave a user with a
                  positive view.
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
                  As the web continues to evolve we see a continued shift into
                  more and more data-intensive and demanding applications.
                  Having the ability to combine backend development along with
                  frontend development is a dream come true for a full-stack
                  engineer. It's fully possible and a widely accepted to develop
                  and deploy an application out of a single codebase. This
                  allows for rapid and robust application deployment as
                  development teams now can work with a singular code base for
                  applications. This has the benefit of enhancing collaboration
                  among peers and enhancing a team focused culture.
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
                  cart on on a website but requires much more than that as a
                  developer. The efforts that go into planning, designing, and
                  implementing data stores can be exceptionally complex.
                  Approaching a design in a logical and critical way allows for
                  others following to make sense of the thinking behind
                  implementation and improves application performance.
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
