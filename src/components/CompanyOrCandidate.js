import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CompanyOrCandidate extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <Link to="/Companysignup"> Company </Link>
          </div>
          <div>
            <Link to="/CandidateSignup"> Candidate </Link>
          </div>
        </div>
      </div>
    )
  }
}


export default CompanyOrCandidate;
