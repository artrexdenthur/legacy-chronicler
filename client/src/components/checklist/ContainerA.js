import React, { Component } from "react";
import { connect } from 'react-redux'
import { Row, Col, Card, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Concepts from './Stateless05';
import EntryForm from './Stateless02';
import submitNewConcept from '../../actions/checklist/submitNewConcept'

class ContainerA extends Component {
  // Handles Adjectives and Nouns
  constructor() {
    super();
    this.state = {
      create_adjective: false,
      create_noun: false,
      adjective_text: "",
      noun_text: ""
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.handleOnInput = this.handleOnInput.bind(this);
    this.handleConceptSubmit = this.handleConceptSubmit.bind(this);
  }

  handleOnInput(type) {
    return (e) => {
      this.setState({
        [`${type}_text`]: e.target.value
      })
    }
  }

  handleConceptSubmit(type) {
    return (e) => {
      e.preventDefault();
      this.props.submitNewConcept({
        type, 
        name: this.state[`${type}_text`]
      })
      this.setState({
        [`${type}_text`]: ""
      })
      this.toggleButton(type)

    }
  }

  handleOnClick(type) {
    if (type === "adjective") {
      this.setState({
        create_adjective: !this.state.create_adjective
      });
    } else {
      this.setState({
        create_noun: !this.state.create_noun
      })
    }
  }

  toggleButton(type) {
    if (this.state[`create_${type}`]) {
      return <EntryForm 
      type={type}
      text={this.state[`${type}_text`]}
      handleOnInput={this.handleOnInput(type)}
      handleOnSubmit={this.handleConceptSubmit(type)} /> 
    } else {
      return (
        <Button className='text-center my-sm-2' onClick={() => this.handleOnClick(type)}>
          {"New " + type.slice(0, 1).toUpperCase() + type.slice(1)}
        </Button>
      );
    }
  }

  render() {
    return (
      <Row>
        <br/>
        <Col>
          <Card>
            <Concepts 
            concepts={this.props.state.adjectives} 
            type="adjective" 
            addNew={this.state.create_adjective}
            toggleButton={() => this.toggleButton("adjective")}
            />
            
          </Card>
        </Col>
        <Col>
          <Card>
            <Concepts 
            concepts={this.props.state.nouns} 
            type="noun" 
            addNew={this.state.create_noun}
            toggleButton={() => this.toggleButton("noun")}
            />
          </Card>
        </Col>
      </Row>
      
      
    );
  }
}

const mapState = state => {
  return {
    state: state.concepts
  };
};

const mapDispatch = dispatch => {
  return {
    submitNewConcept: concept => dispatch(submitNewConcept(concept))
  }
}
const ToggleButton = props => {
  return <Button onClick={props.handleOnClick}>Toggler</Button>;
};

export default connect(mapState, mapDispatch)(ContainerA)