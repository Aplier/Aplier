import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';




const getCandidateQuery = gql`
  {
    candidates {
      id
      imgURL
      firstName
      lastName
      intro
    }
  }
`;



class Candidate extends Component {
  displayCandidates() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidates...</div>;
    } else {
      return data.candidates.map(candidate => {
        return (
          <div key={candidate.id}>
            <img src={candidate.imgURL} alt="candidate img"/>
            <h5>{candidate.firstName} {candidate.lastName}</h5>
            <p>{candidate.intro}</p>
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
