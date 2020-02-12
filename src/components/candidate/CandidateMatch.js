import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMatchByCandidateQuery } from '../../queries/queries';
// import ScreeningQuestions from './ScreeningQuestions'
import { Link } from 'react-router-dom';

class CandidateMatch extends Component {
  displayPositions() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Matches...</div>;
    } else {
      return data.candidate.companyPositions.map(position => {
        return (
          <div className="screeningLinks" key={position.id}>
            {/* <img src={company.imgURL} alt="company img" /> */}
            <Link to={'/screening'}>
              <font color="black">
                <p>{position.title}</p>
              </font>
            </Link>
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
    <h3>Congratulations!</h3>
    <p> You've matched with: </p>
        <div> {this.displayPositions()}</div>
        
        <br></br>
        <br></br>
        <p>Click on the positions and fill out the screening questions.</p>
        </div>
      </div>
    );
  }
}

export default graphql(getMatchByCandidateQuery, {
  options: () => {
    return {
      variables: {
        id: 1,
      },
    };
  },
})(CandidateMatch);
