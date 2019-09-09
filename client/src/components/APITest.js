import  React, { Component } from 'react'
import { connect } from 'react-redux'

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
        <button onClick={this.handleOnClick}>Fetch tha!</button>
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