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

const About = props => {
  return (
    <div className='about-container'>
      <Row className='justify-content-md-center'>
        <Col className='about-intro text-center' md='auto'>
          <h1>So...</h1>
          <p className='lead'>
            I <em>really</em> like to make things. I also really like working
            with people.
          </p>
          <p className='lead'>Need some proof?</p>
        </Col>
      </Row>
      <Row className='justify-content-md-center about-bottom'>
        <Col md='3'>
          <Card>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/technics'
              alt='Card image cap'
            />
            <CardBody className='about-card-body'>
              <CardText>Here is something you can see.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='3'>
          <Card>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/abstract'
              alt='Card image cap'
            />
            <CardBody className='about-card-body'>
              <CardText>
                Did you see the first one? If not, here's another.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='3'>
          <Card>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/city'
              alt='Card image cap'
            />
            <CardBody className='about-card-body'>
              <CardText>
                Everybody loves Lorem Ipsum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laboriosam velit consectetur ullam
                nobis, vel recusandae tempora dignissimos molestias ad
                doloremque quae doloribus quia, pariatur optio.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
