import React from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';

const Skills = props => {
  return (
    <div className='skills-container' id='skills'>
      <Row className='justify-content-md-center skills-top d-flex align-items-top'>
        <Col className='text-center skill' md='4'>
          <Card className='justify-content-md-center'>
            <CardText>
              <i className='fab fa-js-square fa-5x' />
              <i class='fab fa-react fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6 className='text-center'>Frontend Development</h6>
                <p className='lead text-justify'>
                  I love writing JavaScript. In a world full of complex problems
                  that users and developers encounter every day, JavaScript
                  introduces endless solutions to tackle them. I focus on
                  writing clean, DRY, and well-documented code to build web
                  applications that just work as expected.
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
                <h6>User Experience</h6>
                <p className='lead text-justify'>
                  There is a lot of power in elegance, simplicity, and directing
                  user focus on the web. Writing clean and semantic code to have
                  understandable layouts and to optimize SEO is critical when
                  delivering applications. Aesthetically pleasing experiences
                  that are created to enhance user experience is fundamental.
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
                <h6>Backend Development</h6>
                <p className='lead text-justify'>
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
                <h6>Data</h6>
                <p className='lead text-justify'>
                  Data persistence is absolutely essential to the way that the
                  modern web works. Utilizing Relational Databases, NoSQL
                  databases, and cloud software as a service / platforms as a
                  service applications allows us to access data that has been
                  neatly stored away for us.
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
