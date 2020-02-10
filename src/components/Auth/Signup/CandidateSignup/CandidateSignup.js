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
      candidateSignedUp: false,
      confirmationCode: '',
    };
  }

  signUp = () => {
    const { email, password, firstName, lastName, address } = this.state;

    Auth.signUp({
      username: email,
      password: password,
      attributes: {
        firstName: firstName,
        lastName: lastName,
        address: address,
      },
    })
      .then(() => {
        console.log('Welcome to Aplier');
      })
      .catch(err => console.log('Error', err));
  };

  confirmSignUp = () => {
    const { email, confirmationCode } = this.state;

    Auth.confirmSignUp(email, confirmationCode)
      .then(() => {
        console.log('Confirmed Sign up');
        this.props.handleSignUp();
      })
      .catch(err => console.log('Error', err));
  };

  handleSubmit = event => {
    const { candidateSignedUp } = this.state;
    event.preventDefault();

    if (candidateSignedUp) {
      this.confirmSignUp();
      this.setState({
        confirmationCode: '',
        email: '',
      });

      this.props.mutate({
        variables: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: this.state.address,
          email: this.state.email,
          password: this.state.password,
          // phone: this.state.phone,
          // intro: this.state.intro,
        },
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
              onChange={this.handleChange}
            />
            <button>Confirm Sign Up</button>
          </form>
        </div>
      );
    } else {
      return (
        // turns background blue
        // <div className="Cform">
        <div>
          <p className="miniLogo">Aplier</p>
          <div className="formContainer">
            <img
              className="circleCompany"
              src="https://i.imgur.com/cPUORG1.png"
              alt="CandidateImage"
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
              />{' '}
              <br /> <br />
              <label className="Clabel">Address</label>
              <input
                className="Cinput"
                onChange={event =>
                  this.setState({ address: event.target.value })
                }
                value={this.state.address}
                required
              />{' '}
              <br /> <br />
              <label className="Clabel">Email</label>
              <input
                className="Cinput"
                onChange={event => this.setState({ email: event.target.value })}
                value={this.state.email}
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
                required
              />{' '}
              <br /> <br />
              {/* <label className="Clabel">Phone Number</label>
            <input
              className="Cinput"
              onChange={event => this.setState({ phone: event.target.value })}
              value={this.state.phone}
            /> <br/> <br/>
            <label className="Clabel">Intro</label>
            <input
              className="Cinput"
              handleChange={event => this.setState({ intro: event.target.value })}
              value={this.state.intro}
            /> <br/> <br/> */}
              <button className="customeButton" type="submit">
                Sign up!
              </button>
            </form>{' '}
            <br />
            <button className="customeButton">
              Continue with LinkedIn
            </button>{' '}
            <br />
          </div>
        </div>
      );
    }
  }
}

export default graphql(addCandidateMutation)(TestCandidateForm);
