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
            Technical skills work best when understanding not only
            <span className='font-italic'> where</span> those skills can be
            applied, but <span className='font-italic'> how</span> we can solve
            problems with creativity and in unique and efficient ways. This
            isn't a list of skills but rather thoughts on how they are relevant
            to me.
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
                  There are countless issues that impact users on a daily basis.
                  I am not immune to those. There are multitudes of complex
                  challenges that engineers encounter daily as well. I also, am
                  not immune to those. Having the skill set and aptitude to find
                  solutions to those issues and to solve them is fundamental. I
                  love that JavaScript allows me to explore potential solutions
                  to definite problems in not just best practice ways but also
                  in ways that are derived from my own unique thought process.
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
                  There's a lot of power in elegant and aesthetically pleasing
                  design. To that end, working with things that can be
                  conceptually complex and be subversive to development.
                  Usability and functionality is imperative but those are not
                  exclusive to having poor design standards. It's not the most
                  common skill to have the ability as a developer to have a
                  vision and then to execute it in a meaningful way for users.
                  Being able to visualize things in a different way than others
                  do is a skill that isn't overly technical in nature, but when
                  combined with technical skills, can create powerful
                  interactions that leave a user with a positive view.
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
