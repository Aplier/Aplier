import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Auth } from 'aws-amplify';
import { addCompanyMutation } from '../../../../queries/queries';

class TestCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      location: '',
      industry: '',
      companySignedUp: false,
      confirmationCode: '',
      perks: '',
      website: '',
      imgURL: '',
      vidURL: '',
      users: [],
      positions: [],
    };
  }

  signUp = async () => {
    const {
      email,
      password,
      name,
      location,
      industry,
      // companySignedUp,
      // confirmationCode,
      // perks,
      // website,
      // imgURL,
      // vidURL,
      // users,
      // positions,
    } = this.state;
    let data = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        'custom:name': name,
        'custom:industry': industry,
        'custom:location': location,
        // sub: cognitoId,
        // picture: imgURL,
        // intro: intro,
        // phone: phone,
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
    event.preventDefault();
    const {
      name,
      location,
      industry,
      email,
      password,
      companySignedUp,
    } = this.state;
    this.props.mutate({
      variables: {
        name: name,
        location: location,
        industry: industry,
        email,
        password,
      },
    });

    if (companySignedUp) {
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
        companySignedUp: true,
      });
    }

    if (companySignedUp) {
      this.confirmSignUp();
      this.setState({
        password: '',
        email: '',
        companySignedUp: true,
      });
    }
    this.props.history.push('/');

    this.props.history.push('/confirmemail');
  };

  render() {
    return (
      // turns background blue
      // <div className="Cform">
      <div className="aboutUsColor">
          <br></br>
        <div className="mapCandidates2">
        <div className="formContainer">
            <img
              className="circleCompany"
              src="https://i.imgur.com/vENrb8T.png"
              alt="companyImage"
            />{' '}
            <br />
            <form onSubmit={this.handleSubmit}>
              <label className="Clabel">Company Name</label> <br />
              <input
                className="Cinput"
                onChange={event => this.setState({ name: event.target.value })}
                value={this.state.name}
                type="text"
                required
              />{' '}
              <br /> <br />
              <label className="Clabel">Email</label> <br />
              <input
                className="Cinput"
                onChange={event => this.setState({ email: event.target.value })}
                value={this.state.email}
                type="email"
                required
              />{' '}
              <br /> <br />
              <label className="Clabel">Password</label> <br />
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
              <label className="Clabel">Industry</label> <br />
              <input
                className="Cinput"
                onChange={event =>
                  this.setState({ industry: event.target.value })
                }
                value={this.state.industry}
                type="text"
              />{' '}
              <br /> <br />
              <label className="Clabel">Location</label> <br />
              <input
                className="Cinput"
                onChange={event =>
                  this.setState({ location: event.target.value })
                }
                value={this.state.location}
                type="text"
              />{' '}
              <br /> <br />
              <button className="customeButton" type="submit">
                Sign up!
              </button>
            </form>
          </div>
      </div>
      </div>
    );
  }
}

export default graphql(addCompanyMutation)(TestCompanyForm);
