import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginSelector = props => (
  <div>
    <h2> Please Select One</h2>
    <NavLink to="/candidatelogin"> Candidate </NavLink>
    <NavLink to="/userlogin"> Employer </NavLink>
  </div>
);

export default LoginSelector;
