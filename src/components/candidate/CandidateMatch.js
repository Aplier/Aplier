//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
//Queries
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
                <p className="positionMatch">{position.title}</p>
              </font>
            </Link>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="aboutUsColor">
          <br></br>
        <div className="mapCandidates2">
      <div>
        <div className="matchPage">
          <img alt="matchImg"src="https://media1.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=790b761160073121779c827564623abc8228956f1f9983c1&rid=giphy.gif"/>
    <h3>Congratulations!</h3>
    <p> You've matched with: </p>
        <div> {this.displayPositions()}</div>

        <br></br>
        <br></br>
        <h4>Next Steps</h4>
        <p>Click on any of the above positions proceed to the screening questions.</p>
        </div>

      </div>
      <img className="aplierLogo2"alt="logo" src="https://i.imgur.com/XwTxX7q.png"/>
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
