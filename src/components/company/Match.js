import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getMatchByPositionQuery} from '../../queries/queries'
import Candidate from '../candidate/Candidate';

class Match extends Component {
  displayCandidates() {
    let data = this.props.data;
    console.log(data)
    if (data.loading) {
      return <div>Loading Candidates...</div>;
    } else {
      return data.companyPosition.candidates.map(candidate => {
        return (
          <div key={candidate.id}>
            {/* <img src={company.imgURL} alt="company img" /> */}
            <p>{candidate.firstName} {candidate.lastName}</p>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <h2>Candidates you have matched with!</h2>
        <div> {this.displayCandidates()}</div>
      </div>
    )
  }
}

export default graphql(getMatchByPositionQuery, {
    options: () => {
        return{
            variables: {
                id:1
            }
        }
    }
})(Match);
