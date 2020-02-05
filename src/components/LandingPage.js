import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="AplierTitleContainer">
          <h1>Aplier</h1>
        </div>
        <div className="AplierButtonContainer">
        <button>
          Continue with LinkedIn
        </button>
        <Link to="/user">Or Continue With Email</Link>
        </div>
      </div>
    )
  }
}


export default LandingPage;
