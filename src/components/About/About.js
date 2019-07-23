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
            <h1 id='about'>This is who I am.</h1>
            <p className='lead text-left'>
              <p className='about-text'>
                <h6 className='text-center font-weight-bold'>
                  I am the person that never stops pursuing excellence.
                </h6>
                <p>
                  I am not the person I was when I woke up yesterday. Today I am
                  the best version of me that I have to offer. Make no mistake
                  however -- that does not mean that I do not have a relentless
                  desire to become better or that I'm content with who I am
                  today. I mean,{' '}
                  <span className='font-italic'>
                    I am pretty great, but I can become greater.
                  </span>{' '}
                  Every night I fall asleep I do so knowing that I did something
                  to become a better person during my day.
                </p>
                <h6 className='text-center font-weight-bold'>
                  I am the person that never gives up.
                </h6>
                <p>
                  It's a fair conclusion to say that I haven't always succeeded
                  as much as I believe I should or set out to.{' '}
                  <span className='font-italic'>That's okay.</span> That doesn't
                  mean that I will ever stop trying with everything that I have
                  inside of me, around me, and that I can think of to achieve
                  and make things happen.
                  <p className='text-center'>
                    Raising a family?
                    <a className='btn' onClick={this.toggle}>
                      I'm doing it.
                    </a>
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle}
                      className={this.props.className}
                    >
                      <ModalHeader toggle={this.toggle}>
                        <i class='fal fa-heart' />
                      </ModalHeader>
                      <ModalBody>
                        <img
                          width='100%'
                          src='https://raw.githubusercontent.com/hunterraffety/portfolio/hunter-raffety/src/assets/img/family.png'
                          alt='my children. love.'
                        />
                      </ModalBody>
                      <ModalFooter />
                    </Modal>
                  </p>
                  <p className='text-center'>
                    Work?
                    <a
                      className='btn'
                      href='https://www.stvincentdepaul.net/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      I don't know how not to.
                    </a>
                  </p>
                  <p className='text-center'>
                    College?
                    <a
                      className='btn'
                      href='https://www.asu.edu/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      I did that.
                    </a>
                  </p>
                  <p className='text-center'>
                    Graduate school?
                    <a
                      className='btn'
                      href='https://www.wgu.edu/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      I did that too.
                    </a>
                  </p>
                  <p className='text-center'>
                    Lambda School?
                    <a
                      className='btn'
                      href='https://lambdaschool.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      I'm doing it.
                    </a>
                  </p>
                </p>
                <h6 className='text-center font-weight-bold'>
                  I am the person that believes in others.
                </h6>
                <p>
                  Nobody in life achieves anything great without the help of
                  someone, somewhere along the way. I'd be the most selfish
                  person to say that I have done all of these things on my own.
                  I didn't. I had people who were invested in, committed to, and
                  believed in me. I spent nearly 10 years as a professional
                  teacher of students with disabilities, and I gave my all. I've
                  looked in my daughter's eyes when it was hard for her to tell
                  the truth and told her I loved her no matter what. I've stood
                  face to face with some hard truths and learned from them. I
                  was never alone though.
                </p>
                <h6 className='text-center font-weight-bold'>
                  I am a software developer.
                </h6>
              </p>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
