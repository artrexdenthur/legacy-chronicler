import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux-token-auth-config";

class RegisterPage extends Component {
  constructor() {
    super();
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
    const { submitForm } = this.submitForm.bind(this);
    return (
      <div>
        ... And the Reg form
        <form onSubmit={submitForm}></form>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser },
)(RegisterPage)