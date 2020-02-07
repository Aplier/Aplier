import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCandidateQuery } from '../../queries/queries';

class Candidate extends Component {
  displayCandidates() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidates...</div>;
    } else {
      return data.candidates.map(candidate => {
        return (
          <div  className="mapCandidates" key={candidate.id}>
            <img src={candidate.imgURL} alt="candidate img" />
            <h3>
              {candidate.firstName} {candidate.lastName}
            </h3>
            <p>{candidate.address}</p>
            {/* <p>{candidate.phone}</p> */}
            <p>{candidate.email}</p>
            <p>{candidate.intro}</p>
            <p>PLACE HOLDER FOR EDU</p>
            <p>PLACE HOLDER FOR CURRENT JOB</p>
            <p>PLACE HOLDER FOR PREVIOUS JOB</p>
            <img className='thumbs'alt='up'src="https://img.icons8.com/cotton/2x/thumb-up.png"/>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <div className='allCandidates'> {this.displayCandidates()}</div>
      </div>
    );
  }
}

export default graphql(getCandidateQuery)(Candidate);
