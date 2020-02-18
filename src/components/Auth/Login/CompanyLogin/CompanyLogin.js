//Libraries
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class CompanyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isCompanyLoggedIn: false,
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { isCompanyLoggedIn, email, password } = this.state;
    try {
      let signedIn = await Auth.signIn({
        username: email,
        password: password,
      });

      if (isCompanyLoggedIn === false) {
        try {
          await signedIn;
          this.setState({
            isCompanyLoggedIn: true,
            wrongCredentials: false,
          });
          this.props.history.replace('/candidates');
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
      } else if (isCompanyLoggedIn === true) {
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
    const { isCompanyLoggedIn } = this.state;

    if (isCompanyLoggedIn) {
      return null;
    } else {
      return (
        <div>
          <div className="logInContainer">
            <img
              className="loginGif"
              src="https://gophonebox.com/images/Phobby_WaveAnimation.gif"
              alt="CompanyImage"
              type="image"
            />{' '}
            <br />
            <form onSubmit={this.handleSubmit}>
              <label className="Clabel">Email Address</label>
              <input
                type="email"
                name="email"
                className="Cinput"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <br /> <br />
              <label className="Clabel">Password</label>
              <input
                type="password"
                name="password"
                className="Cinput"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <br /> <br />
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
      );
    }
  }
}
export default CompanyLogin;
