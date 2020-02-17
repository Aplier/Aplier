//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
//Queries
import { getCompaniesQuery } from '../../queries/queries';

class Companies extends Component {
  displayCompanies() {
    let data = this.props.data;
    console.log(data);
    if (data.loading) {
      return <div>Loading Companies...</div>;
    } else {
      return data.companies.map(company => {
        return (
          <div key={company.id}>
            <img className="allcompImg"src={company.imgURL}      alt="compantImg"/>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="aboutUsColor">
      <br></br>
      <div className='allCompPage'>
      <h4 className="companiesh4"><center>Employers Registered With</center></h4>
        <img className="aplierLogo"alt="logo" src="https://i.imgur.com/XwTxX7q.png"/>
        <div className="allCompWrap"> {this.displayCompanies()}</div>
        <Link to={'/'}>
          <button className="customeButton">Join us today!</button>
        </Link>
      </div>
      </div>
    )
  }
}

export default graphql(getCompaniesQuery)(Companies);
