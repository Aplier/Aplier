import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

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
    try {
      let signedIn = await Auth.signIn({
        username: email,
        password: password,
      });

      if (isCandidateLoggedIn === false) {
        console.log('SHOULD BE FALSE', isCandidateLoggedIn)
        await signedIn;
        this.setState({
          isCandidateLoggedIn: true,
        });
        console.log('STATE.CANDI ---->',this.state.isCandidateLoggedIn)

        this.props.history.push('/positions');
        window.location.reload()

      } else if(isCandidateLoggedIn === true){
        console.log('SHOULD BE TRUE', isCandidateLoggedIn)

        // this.props.history.push('/positions');
      }
        else {
        await Auth.confirmSignIn(email);
      }

    } catch (error) {
      console.log(error)
    }


  };

  render() {

    const { isCandidateLoggedIn } = this.state;

    if (isCandidateLoggedIn) {
      console.log('Candidate has logged in');
      return null;
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
              <br /> <br />{' '}
              <button className="customeButton" type="submit">
                Login!
              </button>{' '}
            </form>
          </div>
        </div>
      );
    }
  }
}

export default CandidateLogin;
