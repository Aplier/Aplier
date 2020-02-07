import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CompanyOrCandidate extends Component {
  render() {
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <div className="selectContainer">
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
          {/* <div>
          <Link to="/candidates"> View All Candidates </Link>
          </div>
          <div>
          <Link to="/companies"> View All Companies </Link>
          </div>
          <div>
          <Link to="/positions"> View All Positions</Link>

          </div> */}
        </div>
      </div>
    )
  }
}


export default CompanyOrCandidate;
