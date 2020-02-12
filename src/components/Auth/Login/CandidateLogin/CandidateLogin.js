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
          <div className="logInContainer">
            <img
              className="loginGif"
              src="https://gophonebox.com/images/Phobby_WaveAnimation.gif"
              alt="CandidateImage"
              type="image"
            />{' '}
            <br />
            <form onSubmit={this.handleSubmit}>
              {/* <h4 className="mv3">{this.isLoggedIn ? 'Login' : 'Sign Up'}</h4> */}
              <label className="Clabel">Email Address</label>
              <input
                className="Cinput"
                value={this.email}
                onChange={event => this.setState({ email: event.target.value })}
                type="text"
              />
              <br /> <br />
              <label className="Clabel">Password</label>
              <input
                className="Cinput"
                value={this.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                type="password"
              />
              <br /> <br />
              <button className="customeButton" type="submit">
                Login!
              </button>
            </form>
            <div className="flex mt3">
              <div>{/* {this.isLoggedIn ? 'login' : 'create account'} */}</div>
              <div
                className="pointer button"
                // onClick={() => this.setState({ login: !this.isLoggedIn })}
              >
                {/* {this.isLoggedIn
                ? 'need to create an account?'
                : 'already have an account?'} */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CandidateLogin;
