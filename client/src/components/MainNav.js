import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';

export default class MainNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Legacy Chronicler</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse id="legacy-navbar-nav">
          <Nav className="legacy-nav">
              <Nav.Link href="/sign_in">Sign In</Nav.Link>
              <Nav.Link href="/sign_up">Sign Up</Nav.Link>
              <Nav.Link href="/checklist">Conception</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
