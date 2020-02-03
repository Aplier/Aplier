import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getCandidateQuery = gql`
  {
    candidates {
      id
      firstName
      lastName
    }
  }
`;

class TestCandidates extends Component {
  displayCandidates() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidates...</div>;
    } else {
      return data.candidates.map(candidate => {
        return (
          <li key={candidate.id}>
            {candidate.firstName} {candidate.lastName} {candidate.id}
          </li>
        );
      });
    }
  }
  render() {
    console.log('this.props', this.props.data);

    return <div>{this.displayCandidates()}</div>;
  }
}

export default graphql(getCandidateQuery)(TestCandidates);
