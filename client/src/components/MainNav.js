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
            <Nav.Link href="#">Legacies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav id="checklist-nav" className="justify-content-end">
            <Nav.Link href="/checklist">Conception</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav id="nav-user" className="justify-content-end">
          <Nav.Link href="/sign_in">Sign In</Nav.Link>
          <Nav.Link href="/sign_up">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
