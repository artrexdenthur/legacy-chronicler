import React, { Component } from "react";
import { connect } from "react-redux";
import Concepts from "./Concepts";
import { Row, Col, Button } from "react-bootstrap";
import submitNewConcept from '../../actions/checklist/submitNewConcept'

class ContainerB extends Component {
  // Handles Concepts and concept creation (also shows Adj/Noun)
  constructor() {
    super();
    this.state = {
      selected_adjective: 0,
      selected_noun: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.randomOnClick = this.randomOnClick.bind(this)
  }

  randomOnClick() {
    this.props.createRandomConcept()
  }

  handleOnClick() {

    this.props.submitNewConcept({
      type: 'concept',
      adjective_id: this.state.selected_adjective,
      noun_id: this.state.selected_noun
    }) 
  }

  handleSelect(type) {
    return (id) => {
      this.setState({
        [`selected_${type}`]: id
      })
    }
  }

  render() {
    return (
      <Row>
        <Col className="text-right">
          <Concepts 
            concepts={this.props.state.adjectives}
            type="adjective" 
            selected={this.state.selected_adjective}
            handleSelect={this.handleSelect("adjective")} />
        </Col>
        <Col className="text-center">
          <Concepts 
            concepts={this.props.state.concepts} 
            type="concept" />
          <Concepts 
            concepts={this.props.state.randomConcepts}
            type="random concept"
            active={true} />
          <Button onClick={this.handleOnClick}>Conceptualize!</Button>
          <Button onClick={this.randomOnClick}>Random Concept!</Button>
        </Col>
        <Col>
          <Concepts 
            concepts={this.props.state.nouns} 
            type="noun"
            selected={this.state.selected_noun}
            handleSelect={this.handleSelect("noun")} />
        </Col>
      </Row>
    );
  }
}

function randomConcept(props) {

}

const mapState = state => {
  return {
    state: state.concepts
  };
};

const mapDispatch = dispatch => {
  return {
    submitNewConcept: concept => dispatch(submitNewConcept(concept)),
    createRandomConcept: () => dispatch({ type: "CREATE_CONCEPT" })
  }
}

export default connect(mapState, mapDispatch)(ContainerB);
