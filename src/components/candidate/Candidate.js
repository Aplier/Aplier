import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCandidateQuery} from '../../queries/queries'

class Candidate extends Component {
  displayCandidates() {

    let data = this.props.data;
    console.log(data)
    if (data.loading) {
      return <div>Loading Candidates...</div>;
    } else {
      return data.candidates.map(candidate => {
        return (
          <div key={candidate.id}>
            <img src={candidate.imgURL} alt="candidate img"/>
            <h5>{candidate.firstName} {candidate.lastName}</h5>
            <p>{candidate.intro}</p>
            <p>{candidate.address}</p>
            {/* <p>{candidate.phone}</p> */}
            <p>{candidate.email}</p>
            <p>{candidate.intro}</p>
            <p>PLACE HOLDER FOR EDU</p>
            <p>PLACE HOLDER FOR CURRENT JOB</p>
            <p>PLACE HOLDER FOR PREVIOUS JOB</p>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
          <div> {this.displayCandidates()}</div>
      </div>
    )
  }
}

export default graphql(getCandidateQuery)(Candidate);
