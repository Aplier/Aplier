import React from 'react';
import { Link } from 'react-router-dom';

const LoginSelector = props => (
  <div>
    <h2> Please Select One</h2>
    <button className="customeButton">
      <Link to="/candidatelogin"> Candidate</Link>
    </button>
    <button className="customeButton">
      <Link to="/userlogin">Employer </Link>
    </button>
  </div>
);

export default LoginSelector;
