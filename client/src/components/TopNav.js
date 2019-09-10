import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const TopNav = () => (
  <Navbar>
    <Nav className="default-nav">
      <Nav.Link>
        <Link to="/app" exact>
          Home
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/app/about" exact>
          About
        </Link>
      </Nav.Link>
    </Nav>
  </Navbar>
);
