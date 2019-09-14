import React, { Component } from "react";
// import { connect } from "react-redux";
import { signInUser } from "../../redux-token-auth-config";

export default class SignInPage extends Component {
  constructor(props) {
    super();
  }

  submitForm(e) {
    e.preventDefault();
    const { signInUser } = this.props;
    const { email, password } = this.state;
    signInUser({ email, password })
      .then()
      .catch();
  }

  render() {
    const { submitForm } = this;
    return (
      <div>
        This is where my SignIn form goes
        <form onSubmit={submitForm}></form>
      </div>
    );
  }
}

// export default connect(
//   null,
//   { signInUser },
// )(SignInPage)
