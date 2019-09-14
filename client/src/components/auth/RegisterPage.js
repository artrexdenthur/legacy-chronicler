import React, { Component } from "react";
// import { connect } from "react-redux";
import { registerUser } from "../../redux-token-auth-config";

export default class RegisterPage extends Component {
  constructor(props) {
    super();
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(e) {
    e.preventDefault();
    const { registerUser } = this.props;
    const { email, firstName, password } = this.state;
    registerUser({ email, firstName, password })
      .then()
      .catch();
  }

  render() {
    return (
      <div>
        ... And the Reg form
        <form onSubmit={event => this.submitForm(event)}></form>
      </div>
    );
  }
}

// export default connect(
//   null,
//   { registerUser },
// )(RegisterPage)