//Libraries
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class CandidateLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isCandidateLoggedIn: false,
      wrongCredentials: false,
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentUserInfo();
    } catch (error) {
      console.error(error);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { isCandidateLoggedIn, email, password } = this.state;
    try {
      let signedIn = await Auth.signIn({
        username: email,
        password: password,
      });

      if (isCandidateLoggedIn === false) {
        try {
          await signedIn;
          this.setState({
            isCandidateLoggedIn: true,
            wrongCredentials: false,
          });

          this.props.history.replace('/positions');
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
      } else if (isCandidateLoggedIn === true) {
      } else {
        try {
          await Auth.confirmSignIn(email);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
      this.setState({
        wrongCredentials: true,
      });
    }
  };

  render() {
    const { isCandidateLoggedIn } = this.state;

    if (isCandidateLoggedIn) {
      return null;
    } else {
      return (
        <div className="aboutUsColor2">
          <br></br>
          <div className="mapCandidates2">
            <div className="logInContainer">
              <img
                className="loginGif"
                src="https://gophonebox.com/images/Phobby_WaveAnimation.gif"
                alt="CandidateImage"
                type="image"
              />{' '}
              <br />
              <form onSubmit={this.handleSubmit}>
                <label className="Clabel">Email Address</label>
                <input
                  className="Cinput"
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                  type="text"
                />
                <br /> <br />
                <label className="Clabel">Password</label>
                <input
                  className="Cinput"
                  value={this.state.password}
                  onChange={event =>
                    this.setState({ password: event.target.value })
                  }
                  type="password"
                />
                <br /> <br />{' '}
                <button className="customeButton" type="submit">
                  Login!
                </button>
                <div>
                  {this.state.wrongCredentials ? (
                    <p>Wrong username and/or password!</p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CandidateLogin;
