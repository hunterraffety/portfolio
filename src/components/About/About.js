import React from 'react';
import { Row, Col } from 'reactstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className='about-container'>
        <a href='#' className='about-anchor' id='about-anchor' />
        <Row className='justify-content-md-center justify-content-xs-center'>
          <Col className='about-intro text-center' md='8'>
            <h1 id='about'>Who am I?</h1>
            <p className='lead text-left'>
              <p className='about-text'>
                <h6 className='text-center font-weight-bold'>
                  In pursuit of growth
                </h6>
                <p>
                  I'm not the same person that I was when I woke up yesterday.
                  Today I am the best version of me that I have to offer. Make
                  no mistake however -- that doesn't mean that I don't have a
                  relentless desire to become better or that I'm content with
                  who I am today. I mean,{' '}
                  <span className='font-italic'>
                    I am pretty great, but I know I can become greater.
                  </span>{' '}
                  Every night I fall asleep I do so knowing that I did something
                  during my day to become a better person.
                </p>
                <h6 className='text-center font-weight-bold'>Relentless</h6>
                <p>
                  It's a fair and honest admission to say that I haven't always
                  succeeded as much as I believe I should -- or that I've met
                  all of the high expectations that I set for myself.{' '}
                  <span className='font-italic'>That's okay.</span> That doesn't
                  mean that I'll ever stop trying with every skill and resource
                  that I have -- it also doesn't mean that I won't look to
                  others around me when I need help. It's okay to ask for help.
                  I will apply all of the knowledge I have learned through
                  personal experiences, professional experiences, and education
                  to figure out the ways I can best tackle a challenge or solve
                  a problem.
                </p>
                <h6 className='text-center font-weight-bold'>
                  A champion of others
                </h6>
                <p>
                  Nobody in life achieves anything great without the help of
                  someone else somewhere along the way. I'd be arrogant and
                  selfish to say that I have achieved everything on my own.{' '}
                  <span className='font-italic'>I didn't.</span> Achievement
                  requires strong work ethic, time, and critical thought &
                  problem solving. I also had people who were invested in,
                  committed to, and believed in me. I spent nearly 10 years as a
                  Special Education teacher and co-taught secondary and high
                  school mathematics. I gave my all every day. I've given all
                  the love I have to my wife, son, and daughter. I've stood in
                  the face of some hard truths and learned from them. I was
                  never alone though. These are a few of the things that make me
                  want to give back to others in any way I am capable of. I want
                  to make continued investments in others like so many have for
                  me. Being a software engineer is just one of the ways I can do
                  that.
                </p>
              </p>
            </p>
          </Col>
        </Row>
        <Row className='justify-content-md-end skills-top d-flex align-items-top footer-bottom'>
          <Col className='text-right' md='auto'>
            <a href='#home'>
              <i class='fal fa-arrow-to-top fa-2x dark' />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
