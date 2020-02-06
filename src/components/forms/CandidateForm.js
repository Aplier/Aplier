import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addCandidateMutation } from '../../queries/queries';

class TestCandidateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      password: '',
      phone: '',
      intro: '',
      imgURL: '',
      vidURL: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        into: this.state.intro
      },
    });
  }

  render() {
    return (
      <div>
        <h3>CREATE A NEW CANDIDATE ACCOUNT</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Enter First Name:</label>
          <input
            onChange={event => this.setState({ firstName: event.target.value })}
            value={this.state.firstName}
          />
          <label>Enter Last Name:</label>
          <input
            onChange={event => this.setState({ lastName: event.target.value })}
            value={this.state.lastName}
          />
          <label>Enter Address</label>
          <input
            onChange={event => this.setState({ address: event.target.value })}
            value={this.state.address}
          />
          <label>Enter Email</label>
          <input
            onChange={event => this.setState({ email: event.target.value })}
            value={this.state.email}
          />
          <label>Enter Password</label>
          <input
            onChange={event => this.setState({ password: event.target.value })}
            value={this.state.password}
          />
          <label>Enter Phone</label>
          <input
            onChange={event => this.setState({ phone: event.target.value })}
            value={this.state.phone}
          />
          <label>Enter Intro</label>
          <input
            onChange={event => this.setState({ intro: event.target.value })}
            value={this.state.intro}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(addCandidateMutation)(TestCandidateForm);
