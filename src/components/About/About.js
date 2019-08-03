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
            <h1 id='about'>I am</h1>
            <p className='lead text-left'>
              <p className='about-text'>
                <h6 className='text-center font-weight-bold'>
                  In pursuit of growth
                </h6>
                <p>
                  I woke up today a better person than when I woke up yesterday.
                  That doesn't mean that I don't have a relentless drive to
                  become better today though.{' '}
                  <span className='font-italic'>I am pretty great</span>, but I
                  know I can do more. It makes sense to me that if I can do
                  amazing things in life, I'm just going to go ahead and do
                  those things.
                </p>
                <h6 className='text-center font-weight-bold'>Relentless</h6>
                <p>
                  I decided a long time ago that I can't allow barriers prevent
                  me from being successful. I'm going to make use of every skill
                  and resource that I have along with all of the things I have
                  learned during my life to find success. I'll also look to
                  others around me when I need help and support.{' '}
                  <span className='font-italic'>It's okay to ask for help</span>
                  .
                </p>
                <h6 className='text-center font-weight-bold'>
                  A champion of others
                </h6>
                <p>
                  Nobody in life achieves anything great without the help of
                  someone else.{' '}
                  <span className='font-italic'>I know that I haven't.</span> I
                  have people who are invested in me and believe in me. I was a
                  Special Education teacher and co-taught secondary and high
                  school mathematics -- I gave my all every day. I want to give
                  back to others in any way I am capable of.
                </p>
              </p>
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
  }
}

export default About;
