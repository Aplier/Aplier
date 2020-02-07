import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="AplierTitle">
          <h1>Aplier</h1>
        </div>
        <div className="landingInfo">
          <button className="customeButton">Continue with LinkedIn</button>
          <div>
            <Link to="/user">Or Continue With Email</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
