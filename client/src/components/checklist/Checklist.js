import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Tab, Tabs } from 'react-bootstrap'
import ContainerA from './ContainerA'
import ContainerB from './ContainerB'
import fetchConcepts from '../../actions/checklist/fetchConcepts'
import { connect } from 'react-redux'

class Checklist extends Component{

  componentDidMount() {
    this.props.fetchConcepts
    console.log(this.props.state)
  }

  render() {
    const { path } = this.props.match
    const routeA = path + "/containera"
    const routeB = path + "/containerb"
    const { adjectives, nouns, concepts } = this.props.state
    return (
      <div id="checklist-root">
        <h1>Inaccurate Conceptions</h1>
        <Tabs defaultActiveKey="A" id="checklist-tabs">
          <Tab eventKey="A" title="Adjectives and Nouns">
            <ContainerA adjectives={adjectives} nouns={nouns} />
          </Tab>
          <Tab eventKey="B" title="Concepts">
            <ContainerB concepts={concepts} />
          </Tab>
        </Tabs>
        <br/>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchConcepts: dispatch(fetchConcepts()),
  }
}

const mapState = (state) => {
  return {
    state: state.concepts
  }
}
export default connect(mapState, mapDispatch)(Checklist)