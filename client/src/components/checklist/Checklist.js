import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import ContainerA from './ContainerA'
import ContainerB from './ContainerB'

export default class Checklist extends Component{
  render() {
    const { path } = this.props.match
    const routeA = path + "/containera"
    const routeB = path + "/containerb"
    return (
      <div id="checklist-root">
        <h1>Hello from the checklist</h1>
        <LinkContainer to={routeA}>
          <Button>Container A</Button>
        </LinkContainer>
        <LinkContainer to={routeB}>
          <Button>Container B</Button>
        </LinkContainer>
        <Route path={routeA} component={ContainerA} />
        <Route path={routeB} component={ContainerB} />
      </div>
    )
  }
}