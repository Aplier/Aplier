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
            <img src={company.imgURL} alt="company img" />
            <h5>{company.name}</h5>
            <p>{company.location}</p>
            <h5>{company.industry}</h5>
            <p>PLACE HOLDER FOR PERKS</p>
            <p>PLACE HOLDER FOR WEBSITE</p>
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
