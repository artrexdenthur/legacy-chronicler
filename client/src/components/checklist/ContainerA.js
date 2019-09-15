import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Stateless01 from './Stateless01'
import Stateless02 from './Stateless02'

export default class ContainerA extends Component{
  constructor() {
    super()
  }

  render() {
    return (
      <Row>
        <Col>
          <Stateless01 adjectives={this.props.adjectives}/>
        </Col>
        <Col>
          <Stateless02 nouns={this.props.nouns}/>
        </Col>
      </Row>
    )
  }
}