import  React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'

class APITest extends Component {

  constructor() {
    super();
    this.state = {}
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick = function() {

  }
  render() {
    return(
      <div>
        <Button variant="primary" onClick={this.handleOnClick}>Fetch tha!</Button>
        <p>{this.state.results}</p>
      </div>
    )
  }
}

const mapStateToProps = function() {

}

const mapDispatchToProps = function() {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(APITest)