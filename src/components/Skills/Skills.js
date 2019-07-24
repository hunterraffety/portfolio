import React from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';

const Skills = props => {
  return (
    <div className='skills-container' id='skills'>
      <a href='#' className='skills-anchor' id='skills-anchor' />
      <Row className='justify-content-md-center skills-top d-flex align-items-top'>
        <Col md='8' className='text-center about-top'>
          <h1 className='skills-unique'>Skills are not exactly unique</h1>
          <p className='about-text text-left'>
            Technical skills work best when engineers understand not just
            <span className='font-italic'> where</span> those skills can be
            applied, but <span className='font-italic'> how</span> we can use
            them to solve problems with creativity in innovative and efficient
            ways. Everyone brings different strengths and ideas to the table, I
            am unique in that I try to look beyond the fact a problem is solved
            and <span className='font-italic'> things work</span>. I have a
            natural curiosity as to how it was solved or if there is a better
            way. The following isn't a comprehensive list of skills but rather
            thoughts on how they are relevant to me.
          </p>
        </Col>
      </Row>
      <Row className='justify-content-md-center skills-top d-flex align-items-top'>
        <Col md='8' className='text-center about-top'>
          <p className='about-text text-left'>
            There are countless issues that impact users on a daily basis. I am
            not immune to those. Additionally there are multitudes of complex
            challenges that engineers encounter daily as well. I also, am not
            immune to those. I use my skill set and aptitude to find solutions
            to those issues and solve them no matter what challenge I have to
            overcome. I love that JavaScript allows me to explore potential
            solutions to absolute problems in not just best practice ways but
            also in ways that are derived from my own unique thought process,
            and challenge me not just in developing stronger skills but
            intellectually as well.
          </p>
          <p className='about-text text-left about-bump'>
            There's a lot of power in elegant and aesthetically pleasing design.
            To that end, working with things that are conceptually complex can
            be subversive to development but not insurmountable. Usability and
            functionality is imperative and non-negotiable, but those things are
            not exclusive to having a less than stellar user interaction. Being
            able to visualize things in a different way than others do is a
            skill that isn't overly technical in nature, but when combined with
            technical skills, can create powerful interactions that leave a user
            with a positive experience that is effortless and intuitive.
          </p>
        </Col>
      </Row>
      <Row className='justify-content-md-end skills-top d-flex align-items-top'>
        <Col className='text-right' md='auto'>
          <a href='#home'>
            <i class='fal fa-arrow-to-top fa-2x dark' />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
