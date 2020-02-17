import React, { Component } from 'react';
import axios from 'axios';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isUserLoggedIn: false,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    const { email, password } = this.state;

    axios
      .post('http://localhost:5000/sessions', {
        candidate: {
          email: email,
          password: password,
        },
      })
      .then(res => {
        console.log('response', res);
      })
      .catch(err => {
        console.error('Login Error', err);
      });
    event.preventDefault();
  };
  render() {
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
          <button className="customeButton" type="submit">Login!</button>
        </form>
        </div>
      </div>
      </div>
    );
  }
}
export default UserLogin;
