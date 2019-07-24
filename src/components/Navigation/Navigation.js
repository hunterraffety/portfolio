import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar light expand='md' fixed='top'>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto text-center' navbar>
            <NavItem>
              <NavLink href='#about-anchor'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#portfolio-anchor'>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#skills-anchor'>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#contact-anchor'>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='https://linkedin.com/in/huntersraffety'
                target='_blank'
              >
                <i class='fab fa-linkedin-in' />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/hunterraffety' target='_blank'>
                <i class='fab fa-github' />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href='https://linkedin.com/in/huntersraffety'
                target='_blank'
              >
                <i class='fab fa-twitter' />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
