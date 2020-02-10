import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCompaniesQuery} from '../../queries/queries'

class Companies extends Component {
  displayCompanies() {
    let data = this.props.data;
    console.log(data)
    if (data.loading) {
      return <div>Loading Companies...</div>;
    } else {
      return data.companies.map(company => {
        return (
          <div key={company.id}>
            {/* <img src={company.imgURL} alt="company img" /> */}
            <h4>{company.name}</h4>
            <p>{company.location}</p>
            <p>{company.industry}</p>
            <p>{company.perks}</p>
            <p>{company.website}</p>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <div> {this.displayCompanies()}</div>
      </div>
    )
  }
}

export default graphql(getCompaniesQuery)(Companies);
