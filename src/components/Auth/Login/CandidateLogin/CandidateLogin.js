import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class CandidateLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isCandidateLoggedIn: false,
    };
  }

  componentDidMount() {
    Auth.currentUserInfo()
      .then(res => console.log('res', res.attributes.given_name))
      .catch(err => console.log('err', err));
  }

  // handleSignIn = () => {
  //   const { email, password } = this.state;
  //   Auth.signIn(email, password)
  //     .then(user => console.log('user', user))
  //     .then(this.setState({ isLogged: true }))
  //     .catch(err => console.log('Failed', err));
  // };

  handleSubmit = event => {
    event.preventDefault();
    const { isCandidateLoggedIn, email, password } = this.state;

    if (!isCandidateLoggedIn) {
      Auth.signIn({
        username: email,
        password: password,
      })
        .then(user => console.log('Signed In', user))
        .catch(err => console.log('Failed Sign In', err));

      this.setState({
        isCandidateLoggedIn: true,
      });
      this.props.history.push('/myaccount');
    } else {
      Auth.confirmSignIn(email)
        .then(() => console.log('email', email))
        .catch(err => console.log('Failed Confirm', err));
    }
  };

  render() {
    const { isCandidateLoggedIn } = this.state;

    if (isCandidateLoggedIn) {
      return <h1>Candidate has logged In!</h1>;
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h4 className="mv3">{this.isLoggedIn ? 'Login' : 'Sign Up'}</h4>
            <div className="flex flex-column">
              <input
                value={this.email}
                onChange={event => this.setState({ email: event.target.value })}
                type="text"
                placeholder="Your email address"
              />
              <input
                value={this.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                type="password"
                placeholder="Choose a safe password"
              />
              <button type="submit">Sign In</button>
            </div>
          </form>
          <div className="flex mt3">
            <div className="pointer mr2 button">
              {this.isLoggedIn ? 'login' : 'create account'}
            </div>
            <div
              className="pointer button"
              onClick={() => this.setState({ login: !this.isLoggedIn })}
            >
              {this.isLoggedIn
                ? 'need to create an account?'
                : 'already have an account?'}
            </div>
          </div>
        </div>
      );
    }
  }

  // _confirm = async () => {
  //   // ... you'll implement this 🔜
  // };

  // _saveUserData = token => {
  //   localStorage.setItem(AUTH_TOKEN, token);
  // };
}

export default CandidateLogin;
