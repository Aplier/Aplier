import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getMatchByPositionQuery} from '../../queries/queries'
import Candidate from '../candidate/Candidate';

class CompanyMatch extends Component {
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
        <div className="matchPage">
          <img alt="matchImg"src="https://media0.giphy.com/media/13k4VSc3ngLPUY/giphy.gif"/>
    <h3>Congradulations!</h3>
    <p> You've matched with: </p>
        <div> {this.displayCandidates()}</div>
        <br></br>
        <br></br>
        <p>Additional information coming...</p>
        </div>
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
})(CompanyMatch);
