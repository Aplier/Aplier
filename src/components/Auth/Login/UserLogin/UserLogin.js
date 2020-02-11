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
      .post('http://localhost:4000/sessions', {
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
      <div>
        <h2>Hello User, Please Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default UserLogin;
