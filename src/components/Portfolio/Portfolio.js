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

const Portfolio = props => {
  return (
    <div className='portfolio-container align-items-center' id='portfolio'>
      <Row className='justify-content-md-center portfolio-content'>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/technics'
              alt='Card image cap'
            />
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/abstract'
              alt='Card image cap'
            />
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-top'>
            <CardImg
              top
              width='100%'
              src='http://lorempixel.com/640/480/city'
              alt='Card image cap'
            />
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-md-center portfolio-desc'>
        <Col md='3'>
          <Card className='card-bottom'>
            <CardText className='text-center'>
              <h6>Use My Tech Stuff</h6>
            </CardText>
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-bottom'>
            <CardText className='text-center'>Educell</CardText>
          </Card>
        </Col>
        <Col md='3'>
          <Card className='card-bottom'>
            <CardText className='text-center'>React Instagram Clone</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
