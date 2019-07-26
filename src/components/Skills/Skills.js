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
            <span className='font-italic'> where</span> specific skills can be
            applied, but also<span className='font-italic'> how</span> we can
            use those skills to solve problems with creativity and in
            innovative, effective ways. I have a natural drive to not just solve
            problems, but to understand why a solution is best suited for the
            challenge and <span className='font-italic'>why </span>it worked.
            Some people are content to know that
            <span className='font-italic'> things just work</span> -- and that
            might be okay. I find myself asking if there is a way we can do
            things better. The following isn't a comprehensive list of skills
            but rather thoughts on how they are relevant to me.
          </p>
        </Col>
      </Row>
      <Row className='justify-content-md-center skills-top d-flex align-items-top'>
        <Col md='8' className='text-center about-top'>
          <p className='about-text text-left'>
            There are countless issues that impact users on a daily basis -- and
            I am not immune to those. Additionally there are multitudes of
            complex challenges that engineers encounter daily -- and I'm also
            not immune to those. When challenged, I will use my technical skills
            and collaboration with others to find ways to solve problems. Few
            problems exist that can't be solved with adequate effort -- and
            that's exciting. It's very empowering that JavaScript enables
            developers to explore an almost endless variety of solutions for
            things in development that are absolute problems. Not just in best
            practice ways but in ways that adhere to best practice but are
            derived from my own unique thought process and contributions. I
            thrive when I am challenged -- because it doesn't just develop
            strong technical skills but also because challenges lead to growth.
          </p>
          <p className='about-text text-left about-bump'>
            There's a lot of power in elegant and aesthetically pleasing design.
            To that end, working with things that are conceptually complex can
            be subversive to development but not insurmountable. Usability and
            functionality is non-negotiable, but does not mean that users must
            have a less than stellar user interaction. Being able to visualize
            things in a different way than others do is a skill that isn't
            overly technical in nature, but when combined with technical skills
            can create powerful interactions that leave a user with a positive
            experience that is effortless and intuitive.
          </p>
        </Col>
      </Row>
      {/* <Row className='justify-content-md-end skills-top d-flex align-items-top footer-bottom'>
        <Col className='text-right' md='auto'>
          <a href='#home'>
            <i class='fal fa-arrow-to-top fa-2x dark' />
          </a>
        </Col>
      </Row> */}
    </div>
  );
};

export default Skills;
