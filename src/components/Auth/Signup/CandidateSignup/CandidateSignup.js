//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Auth } from 'aws-amplify';
//Queries
import { addCandidateMutation } from '../../../../queries/queries';

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
      cognitoId: '',
      candidateSignedUp: false,
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
      // phone,
      // intro,
      // imgURL,
      // vidURL,
      // cognitoId,
      // candidateSignedUp,
      // confirmationCode,
    } = this.state;
    try {
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          'custom:given_name': firstName,
          'custom:family_name': lastName,
          'custom:address': address,
          // picture: imgURL,
          // sub: cognitoId,
          // intro: intro,
          // phone: phone,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  confirmSignUp = async () => {
    const { email, confirmationCode } = this.state;
    try {
      let confirmed = await Auth.confirmSignUp(email, confirmationCode);
      console.log('confirmed', confirmed);
      this.props.handleSignUp();
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {
      candidateSignedUp,
      firstName,
      lastName,
      address,
      email,
      password,
      cognitoId,
    } = this.state;
    try {
      await this.props.mutate({
        variables: {
          firstName: firstName,
          lastName: lastName,
          address: address,
          email: email,
          password: password,
          cognitoId: cognitoId,
          // phone: phone,
          // intro: intro,
          // imgURL: imgURL,
        },
      });
    } catch (error) {
      console.error(error);
    }

    if (candidateSignedUp) {
      this.confirmSignUp();
      this.setState({
        confirmationCode: '',
        email: '',
      });

      this.props.history.push('/confirmemail');
    } else {
      this.signUp();
      this.setState({
        password: '',
        email: '',
        candidateSignedUp: true,
      });
    }

    if (candidateSignedUp) {
      this.confirmSignUp();
      this.setState({
        password: '',
        email: '',
        candidateSignedUp: true,
      });
    }
    this.props.history.push('/');

    this.props.history.push('/confirmemail');
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
        <div className="aboutUsColor">
          <br></br>
          <div className="mapCandidates2">
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
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
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
        </div>
      );
    }
  }
}

export default graphql(addCandidateMutation)(TestCandidateForm);
