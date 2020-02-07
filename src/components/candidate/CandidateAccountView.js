import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class CandidateAccount extends Component {
  displayCandidatesAccount() {

    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidate Account...</div>;
    } else {
      return (
      <div>
        <h1>Welcome</h1>

      </div>
      )
    }
  }
  render() {
    return (
      <div>
          <div> {this.displayCandidatesAccount()}</div>
      </div>
    )
  }
}

export default graphql(CandidateAccount);
