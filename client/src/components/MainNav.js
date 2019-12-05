import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import logo from '../../public/logo.png'

export default class MainNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle />
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
            alt='legacy-chronicler-home'
            src={logo} 
            style= {{
              width: 64,
              height: 64,
              marginRight: 20
            }}
            className="d-inline-block align-top"
            />
            {'Legacy Chronicler'}
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="legacy-navbar-nav">
          <Nav id="legacy-nav">
            <LinkContainer to="/legacies/campaigns">
              <Nav.Link>Legacies</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav id="conceptualizer-nav" className="justify-content-end">
            <LinkContainer to="/conceptualizer">
              <Nav.Link>Conceptualizer</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        {/* <Nav id="nav-user" className="justify-content-end">
          <LinkContainer to="/sign_in">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sign_up">
          <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav> */}
      </Navbar>
    );
  }
}
