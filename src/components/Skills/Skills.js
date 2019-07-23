import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap';

const Skills = props => {
  return (
    <div className='skills-container' id='skills'>
      <Row className='justify-content-md-center skills-top d-flex align-items-center'>
        <Col className='text-center skill' md='4'>
          <Card className='justify-content-md-center'>
            <CardText>
              <i className='fab fa-js-square fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6>This one is about JavaScript.</h6> Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. A recusandae maxime qui ut
                possimus quae?
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className='text-center skill' md='4'>
          <Card>
            <CardText>
              <i class='fab fa-react fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6>This one is going to be about React.</h6> Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Iure pariatur totam
                voluptatum doloribus id alias!
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
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6>Probable that I am going to write about node.js.</h6> Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Alias
                quaerat consequuntur mollitia eligendi, quisquam quas.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col className='text-center skill' md='4'>
          <Card>
            <CardText>
              <i class='fab fa-sass fa-5x' />
            </CardText>
            <CardBody className='skills-card-body'>
              <CardText>
                <h6>I feel like this should be about styling.</h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis corporis laboriosam ratione pariatur? Ab,
                consectetur?
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
