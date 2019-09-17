import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

export default class MainNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle />
        <LinkContainer to="/">
          <Navbar.Brand>Legacy Chronicler</Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="legacy-navbar-nav">
          <Nav id="legacy-nav">
            <LinkContainer to="/legacies">
              <Nav.Link>Legacies</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav id="checklist-nav" className="justify-content-end">
            <LinkContainer to="/checklist">
              <Nav.Link>Conception</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Nav id="nav-user" className="justify-content-end">
          <LinkContainer to="/sign_in">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sign_up">
          <Nav.Link>Sign Up</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
