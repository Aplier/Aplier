import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

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
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddCompany($name: String!, $location: String!, $industry: String!) {
    addCompany(name: $name, location: $location, industry: $industry) {
      id
      name
      location
      industry
    }
  }
`;

export default TestCompanyForm;
