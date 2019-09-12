import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const TopNav = () => (
  <Navbar>
    <Nav className="default-nav">
      <Nav.Link to="/app">
          Home
      </Nav.Link>
      <Nav.Link to="/app/about">
          About
      </Nav.Link>
    </Nav>
  </Navbar>
);
