// dependencies
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// styled components
const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 3.5s ${fadeInAnimation};
`;

// components

export default function HeaderContent() {
  return (
    <Container className='hc-container'>
      <Row className='cta-top-row'>
        <Col className='cta-top text-center'>
          <FadeIn>
            <h1>Hello.</h1>
          </FadeIn>
        </Col>
      </Row>
      <Row className='cta-middle-row'>
        <Col className='cta-middle' auto='true'>
          <p>My name is Hunter Raffety.</p>
          <p>I am a Full Stack Web Developer from the Phoenix metro area.</p>
        </Col>
      </Row>
    </Container>
  );
}
