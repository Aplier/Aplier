import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCandidateByIdQuery} from '../../queries/queries'

class CandidateAccount extends Component {
  displayCandidatesAccount() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidate Account...</div>;
    } else {
      console.group('WHAT IS PROPS', this.props.data.candidate)
      const {firstName, lastName, address, email} = this.props.data.candidate

      return (
      <div>
        <h1>Welcome {firstName} {lastName}</h1>
        <p>{address}</p>
        <p>{email}</p>
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

export default graphql(getCandidateByIdQuery, {
    options:(props) => {
      return {
        variables: {
          id:props.candidateId
        }
      }
    }
})(CandidateAccount)
