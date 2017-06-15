import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className={"navbar-fixed-top"}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img alt="Brand" width="150px" height="25px" src="http://www.farmsteadarchery.com/images/logos/Shooter-Shooter%20Logo.jpg" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Images</NavItem>
            <NavItem eventKey={2} href="#">Videos</NavItem>
            <NavDropdown eventKey={3} title="Subscription" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Plan 1</MenuItem>
              <MenuItem eventKey={3.2}>Plan 2</MenuItem>
              <MenuItem eventKey={3.3}>Plan 3</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Plan 4</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} ><Link to="/about">About</Link></NavItem>
            <NavItem eventKey={2} href="#">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
