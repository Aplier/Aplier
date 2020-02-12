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

  async componentDidMount() {
    try {
      await Auth.currentUserInfo();
    } catch (error) {
      console.log(error);
    }
  }

  // handleSignIn = () => {
  //   const { email, password } = this.state;
  //   Auth.signIn(email, password)
  //     .then(user => console.log('user', user))
  //     .then(this.setState({ isLogged: true }))
  //     .catch(err => console.log('Failed', err));
  // };

  handleSubmit = async event => {
    event.preventDefault();
    const { isCandidateLoggedIn, email, password } = this.state;

    let signedIn = await Auth.signIn({
      username: email,
      password: password,
    });

    if (!isCandidateLoggedIn) {
      await signedIn;
      this.setState({
        isCandidateLoggedIn: true,
      });
      this.props.history.push('/positions');
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
}

export default CandidateLogin;
