//Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyOrCandidate extends Component {
  render() {
    return (
      <div>
        <p className="miniLogo">Aplier</p>

        <div className="candidateOrCompany">
          <img
            className="circleCompany"
            src="http://tny.im/kIp"
            alt="companyImage"
          />{' '}
          <br />
          <h2>Sign Up</h2>
          <h3>Are you a/an?</h3>
          <div>
            <button className="customeButton">
              <Link to="/companysignup"> Employer </Link>
            </button>
          </div>
          <br></br>
          <div>
            <button className="customeButton">
              <Link to="/candidatesignup"> Candidate </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyOrCandidate;
