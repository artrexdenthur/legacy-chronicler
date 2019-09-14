import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

export default class Nav extends Component {

  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>Legacy Chronicler</Navbar.Brand>
        </LinkContainer>
      </Navbar>
    )
  }
}