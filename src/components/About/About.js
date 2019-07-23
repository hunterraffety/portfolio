import React from 'react';
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

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
        <Row className='justify-content-md-center'>
          <Col className='about-intro text-center' md='6'>
            <h1 id='about'>Who am I?</h1>
            <p className='lead text-left'>
              <p className='about-text'>
                <h6 className='text-center font-weight-bold'>
                  In pursuit of growth
                </h6>
                <p>
                  I am not the same person that I was when I woke up yesterday.
                  Today I am the best version of me that I have to offer. Make
                  no mistake however -- that does not mean that I do not have a
                  relentless desire to become better or that I'm content with
                  who I am today. I mean,{' '}
                  <span className='font-italic'>
                    I am pretty great, but I can become greater.
                  </span>{' '}
                  Every night I fall asleep I do so knowing that I did something
                  to become a better person during my day.
                </p>
                <h6 className='text-center font-weight-bold'>Relentless</h6>
                <p>
                  It's a fair and honest admission to say that I haven't always
                  succeeded as much as I believe I should -- or that I've met
                  all of the high expectations I've set for myself.{' '}
                  <span className='font-italic'>That's okay.</span> That doesn't
                  mean that I will ever stop trying with everything that I have
                  though. It doesn't mean that I won't lean on those around me
                  when I need help. It's okay to ask for help. I will apply all
                  of the knowledge I have learned through personal experiences,
                  professional experiences, and education to figure out the way
                  I can best tackle a challenge or problem.
                </p>
                <h6 className='text-center font-weight-bold'>
                  A champion of others
                </h6>
                <p>
                  Nobody in life achieves anything great without the help of
                  someone, somewhere along the way. I'd be an arrogant and
                  selfish person to say that I have achieved all these things on
                  my own. <span className='font-italic'>I didn't.</span> I had
                  people who were invested in, committed to, and believed in me.
                  I spent nearly 10 years as a Special Education teacher that
                  co-taught secondary and high school mathematics, and I gave my
                  all every day. I've looked in my daughter's eyes when it was
                  hard for her to tell the truth and told her I that loved her
                  no matter what. I've stood face to face with some hard truths
                  and learned from them. I was never alone though. This is one
                  of the things that makes me want to give back to others in any
                  way I can.
                </p>
              </p>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
