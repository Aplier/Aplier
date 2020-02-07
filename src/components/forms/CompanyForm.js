import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {addCompanyMutation} from '../../queries/queries'

class TestCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      industry: '',
      perks: '',
      website: '',
      imgURL: '',
      vidURL: '',
      users: [],
      positions: [],
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        location: this.state.location,
        industry: this.state.industry,
      },
    });
  }

  render() {
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <div className="selectContainer">
          <h3>Company Signup</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Company Name</label> <br />
            <input
              onChange={event => this.setState({ name: event.target.value })}
              value={this.state.name}
              required
            /> <br />
            <label>Industry</label> <br />
            <input
              onChange={event => this.setState({ industry: event.target.value })}
              value={this.state.industry}
            /> <br />
            <label>Location</label> <br />
            <input
              onChange={event => this.setState({ location: event.target.value })}
              value={this.state.location}
            /> <br />
            <button type="submit">Sign up!</button>
          </form>
        </div>
      </div>

    );
  }
}

export default graphql(addCompanyMutation)(TestCompanyForm);
