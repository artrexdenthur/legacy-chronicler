import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import BNav from 'react-bootstrap/Nav';

export default class Nav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Legacy Chronicler</Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="legacy-navbar-nav">
          <BNav className="legacy-nav">
              <BNav.Link href="/sign_in">Sign In</BNav.Link>
              <BNav.Link href="/sign_up">Sign Up</BNav.Link>
              <BNav.Link href="/checklist">Checklist</BNav.Link>
          </BNav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
