import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux-token-auth-config";
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

class RegisterPage extends Component {
  constructor(props) {
    super();
    this.submitForm = this.submitForm.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  state = {
  }

  handleOnChange(e) {
    e.preventDefault();
    const targetId = e.target.id;
    this.setState({
      [targetId]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault();
    const { registerUser } = this.props;
    console.log(registerUser)
    const { email, password, passwordConfirmation } = this.state;
    registerUser({ email, password, passwordConfirmation })
      .then(r => console.log('response:', r))
      .catch(e => console.log("error:", e));
  }

  render() {
    const { submitForm } = this
    // This form needs to have
    //
    return (
      <div>
      <h1>Sign Up</h1>
        <Form onSubmit={submitForm}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="password_confirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password Confirmation" />
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser },
)(RegisterPage)