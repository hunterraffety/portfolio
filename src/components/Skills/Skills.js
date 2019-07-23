import React from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';

const Skills = props => {
  return (
    <div className='skills-container' id='skills'>
      <Row className='justify-content-md-center skills-top d-flex align-items-center'>
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                  recusandae maxime qui ut possimus quae?
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  pariatur totam voluptatum doloribus id alias!
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-md-center skills-bottom'>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias quaerat consequuntur mollitia eligendi, quisquam quas.
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis corporis laboriosam ratione pariatur? Ab,
                  consectetur?
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
