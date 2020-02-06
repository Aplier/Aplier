import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CompanyOrCandidate extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <h1>Are you a ?</h1>
          <div>
            <Link to="/companysignup"> Company </Link>
          </div>
          <div>
            <Link to="/candidatesignup"> Candidate </Link>
          </div>
          <div>
          <Link to="/candidates"> View All Candidates </Link>
          </div>
          <div>
          <Link to="/companies"> View All Companies </Link>
          </div>
        </div>
      </div>
    )
  }
}


export default CompanyOrCandidate;
