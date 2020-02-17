import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="AplierTitle">
          {/* <h1>Aplier</h1> */}
          <img className="landingPageLogo" alt="companyImge" src="https://i.imgur.com/XwTxX7q.png" />
        </div>
        <div className="landingInfo">
          <button className="homeButton">
            <Link to="/signup">Signup</Link>
          </button>{' '}
          <br />
          <button className="homeButton">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
