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
            <h1>This is who I am.</h1>
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
                    >
                      I did that, too.
                    </a>
                  </p>
                  <p className='text-center'>
                    Lambda School?
                    <a
                      className='btn'
                      href='https://lambdaschool.com/'
                      target='_blank'
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
                  the truth. I've stood in the face of some hard truths. I was
                  able to do it because people cared and believed.
                </p>
                <h6 className='text-center font-weight-bold'>
                  I am a software developer.
                </h6>
              </p>
            </p>
          </Col>
        </Row>
        <Row className='justify-content-md-center about-bottom'>
          <Col md='3'>
            <Card>
              <CardImg
                top
                width='100%'
                src='http://lorempixel.com/640/480/technics'
                alt='Card image cap'
              />
              <CardBody className='about-card-body'>
                <CardText>Here is something you can see.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card>
              <CardImg
                top
                width='100%'
                src='http://lorempixel.com/640/480/abstract'
                alt='Card image cap'
              />
              <CardBody className='about-card-body'>
                <CardText>
                  Did you see the first one? If not, here's another.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card>
              <CardImg
                top
                width='100%'
                src='http://lorempixel.com/640/480/city'
                alt='Card image cap'
              />
              <CardBody className='about-card-body'>
                <CardText>
                  Everybody loves Lorem Ipsum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Laboriosam velit consectetur
                  ullam nobis, vel recusandae tempora dignissimos molestias ad
                  doloremque quae doloribus quia, pariatur optio.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
