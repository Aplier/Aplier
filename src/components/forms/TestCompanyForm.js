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
        <h3>CREATE A NEW COMPANY</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Enter company name:</label>
          <input
            onChange={event => this.setState({ name: event.target.value })}
            value={this.state.name}
            required
          />
          <label>Enter industry:</label>
          <input
            onChange={event => this.setState({ industry: event.target.value })}
            value={this.state.industry}
          />
          <label>Enter location</label>
          <input
            onChange={event => this.setState({ location: event.target.value })}
            value={this.state.location}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(addCompanyMutation)(TestCompanyForm);
