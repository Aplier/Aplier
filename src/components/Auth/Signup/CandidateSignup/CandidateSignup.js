import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addCandidateMutation } from '../../../../queries/queries';
import { Auth } from 'aws-amplify';
// import { last } from 'lodash-es';

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
      candidateSignedUp: '',
      confirmationCode: '',
    };
  }

  signUp = async () => {
    const {
      firstName,
      lastName,
      address,
      email,
      password,
      candidateSignedUp,
      confirmationCode,
    } = this.state;
    let data = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        given_name: firstName,
        family_name: lastName,
        address: address,
      },
    });
    console.log('data', data);
  };

  confirmSignUp = async () => {
    const { email, confirmationCode } = this.state;

    let confirmed = await Auth.confirmSignUp(email, confirmationCode);
    console.log('confirmed', confirmed);
    this.props.handleSignUp();
  };

  handleSubmit = event => {
    const { candidateSignedUp } = this.state;
    event.preventDefault();

    this.props.mutate({
      variables: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password,
      },
    });

    if (candidateSignedUp) {
      this.confirmSignUp();
      this.setState({
        confirmationCode: '',
        email: '',
      });

      this.props.history.push('/positions');
    } else {
      this.signUp();
      this.setState({
        password: '',
        email: '',
        candidateSignedUp: true,
      });
    }
    event.target.reset();
  };

  render() {
    const { candidateSignedUp } = this.state;

    if (candidateSignedUp) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label> Confirmation Code</label>
            <input
              id="confirmationCode"
              type="text"
              onChange={event =>
                this.setState({ confirmationCode: event.target.value })
              }
            />
            <button>Confirm Sign Up</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <p className="miniLogo">Aplier</p>
          <div className="formContainer">
            <img
              className="circleCompany"
              src="https://i.imgur.com/cPUORG1.png"
              alt="CandidateImage"
              type="image"
            />{' '}
            <br />
            <form onSubmit={this.handleSubmit}>
              <label className="Clabel">First Name</label>
              <input
                className="Cinput"
                onChange={event =>
                  this.setState({ firstName: event.target.value })
                }
                value={this.state.firstName}
                type="text"
                required
              />{' '}
              <br /> <br />
              <label className="Clabel">Last Name</label>
              <input
                className="Cinput"
                onChange={event =>
                  this.setState({ lastName: event.target.value })
                }
                value={this.state.lastName}
                type="text"
              />{' '}
              <br /> <br />
              <label className="Clabel">Address</label>
              <input
                className="Cinput"
                onChange={event =>
                  this.setState({ address: event.target.value })
                }
                value={this.state.address}
                type="text"
                required
              />{' '}
              <br /> <br />
              <label className="Clabel">Email</label>
              <input
                className="Cinput"
                onChange={event => this.setState({ email: event.target.value })}
                value={this.state.email}
                type="email"
                required
              />{' '}
              <br /> <br />
              <label className="Clabel">Password</label>
              <input
                className="Cinput"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                value={this.state.password}
                type="password"
                required
              />{' '}
              <br /> <br />
              <button className="customeButton" type="submit">
                Sign up!
              </button>
            </form>{' '}
            <br />
          </div>
        </div>
      );
    }
  }
}

export default graphql(addCandidateMutation)(TestCandidateForm);
