import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCompanyPositionsQuery} from '../../queries/queries'

class CompanyPositions extends Component {
  displayCompanyPositions() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Positions...</div>;
    } else {
      return data.companyPositions.map(positions => {
        return (
          <div key={positions.id}>
            <h5>{positions.title}</h5>
            <p>{positions.description}</p>
            <h5>{positions.salaryRange}</h5>
            <h5>{positions.datePosted}</h5>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <div> {this.displayCompanyPositions()}</div>
      </div>
    )
  }
}

export default graphql(getCompanyPositionsQuery)(CompanyPositions);
