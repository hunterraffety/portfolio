// dependencies
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

// components

export default function Portfolio() {
  return (
    <div
      className='portfolio-container d-flex align-items-center'
      id='portfolio'
    >
      <Row className='justify-content-md-center portfolio-content'>
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
}
