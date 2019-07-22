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
    <div className='skills-container'>
      <Row className='justify-content-md-center skills-top'>
        <Col className='skills-intro text-left' md='4'>
          <h1>I use:</h1>
          <p className='lead'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ut
            recusandae assumenda qui reiciendis, dolores at delectus! Itaque
            inventore iste, accusamus repudiandae architecto quaerat nemo!
          </p>
        </Col>
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
        <Col className='skills-intro text-right' md='4'>
          <h1>I also use:</h1>
          <p className='lead'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            facere deleniti, provident ex, vitae quae dolore ipsam odio
            reprehenderit corporis laudantium vel consequatur laborum
            reiciendis?
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
