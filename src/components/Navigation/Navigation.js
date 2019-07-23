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
        <NavItem className='navItem text-center' md='hidden'>
          Hunter Raffety | Full Stack Web Developer
        </NavItem>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto text-center' navbar>
            <NavItem>
              <NavLink href='#about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#portfolio'>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#skills'>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/hunterraffety' target='_blank'>
                Github
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='https://linkedin.com/in/huntersraffety'
                target='_blank'
              >
                LinkedIn
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
