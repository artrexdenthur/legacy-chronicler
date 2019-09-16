import React, { Component } from 'react';
import { connect } from 'react-redux';
import submitNewConcept from '../../actions/checklist/submitNewConcept'
import { Col } from 'react-bootstrap'

class ChecklistForm extends Component {
  constructor() {
    super()
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnInput = this.handleOnInput.bind(this)
    this.state = {
      text: ""
    }
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.submitNewConcept({type: this.props.type, name: this.state.text})
    this.setState({
      text: ""
    })
    this.props.toggle()

  }

  handleOnInput(e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
          {"New " + this.props.type.slice(0, 1).toUpperCase() + this.props.type.slice(1)}
          <input onChange={this.handleOnInput} type="text" name={this.props.type} value={this.state.text} />
        <input type="submit" value="Submit"/>
        </label>
      </form>
    )
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
export default connect(mapState, mapDispatch)(ChecklistForm)