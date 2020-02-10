import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addCandidateMutation } from '../../../../queries/queries';
import { Auth } from 'aws-amplify';

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
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false,
      },
    };
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false,
      },
    });
  };

  onSubmit = async event => {
    event.preventDefault();
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
    //AWS COGNITO
    const { firstName, lastName, address, email, password } = this.state;
    try {
      const candidateSignupResponse = await Auth.signup({
        email,
        password,
        firstName,
        lastName,
        address,
      });
      console.log('candidateSignupResponse', candidateSignupResponse);
    } catch (error) {
      console.error(error);
    }

    this.props.history.push('/positions');
  };

  render() {
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
          <form onSubmit={this.onSubmit}>
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
              onChange={event => this.setState({ address: event.target.value })}
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
            onChange={event => this.setState({ intro: event.target.value })}
            value={this.state.intro}
          /> <br/> <br/> */}
            <button className="customeButton" type="submit">
              Sign up!
            </button>
          </form>{' '}
          <br />
          <button className="customeButton">Continue with LinkedIn</button>{' '}
          <br />
        </div>
      </div>
    );
  }
}

export default graphql(addCandidateMutation)(TestCandidateForm);
