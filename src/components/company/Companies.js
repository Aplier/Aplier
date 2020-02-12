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
            {/* <h4>{company.name}</h4> */}
            <img className="allcompImg"src={company.imgURL} alt="compantImg"/>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className='allCompPage'>
        <h3><center>Companies working with us to find the top tech employees:</center></h3>
       
        <div className="allCompWrap"> {this.displayCompanies()}</div>
        <button className="customeButton">Join us today!</button>
      </div>
    )
  }
}

export default graphql(getCompaniesQuery)(Companies);
