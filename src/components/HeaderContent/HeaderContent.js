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
      <Row className='cta-middle-row'>
        <Col className='cta-middle text-justify' auto='true'>
          <p>
            <span className='emphasis-lg'>Hi! I'm Hunter, </span>
            <span className='emphasis-md'>
              I'm a full-stack engineer from Phoenix, Arizona.
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
