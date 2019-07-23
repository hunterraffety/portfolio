// dependencies
import React from 'react';
import { Card, CardImg, Row, Col } from 'reactstrap';

// components

const Portfolio = props => {
  return (
    <div className='portfolio-container align-items-center' id='portfolio'>
      <Row className='portfolio-text-content justify-content-md-center'>
        <Col className='top' md='auto'>
          <h1 className='text-center'>Finely curated projects.</h1>
        </Col>
      </Row>
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
      <Row className='portfolio-text-content justify-content-md-center'>
        <Col className='bottom text-center' md='3'>
          <h6>Use My Tech Stuff</h6>
          <p className='lead text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            consequuntur beatae qui, neque modi, ex nemo unde eos, fugiat
            suscipit nihil voluptatibus aliquid nobis veniam.
          </p>
        </Col>
        <Col className='bottom text-center' md='3'>
          <h6>Educell</h6>
          <p className='lead text-justify'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            harum nesciunt soluta ipsam perspiciatis, nostrum deserunt impedit
            sed illum assumenda quo, sapiente repudiandae quod delectus?
          </p>
        </Col>
        <Col className='bottom text-center' md='3'>
          <h6>React Instagram Clone</h6>
          <p className='lead text-justify'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magni
            perferendis tenetur beatae, nostrum officiis delectus pariatur
            fugit, laudantium deserunt modi quis iure corrupti. Quibusdam!
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Portfolio;
