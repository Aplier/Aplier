import React from 'react';
import { Link } from 'react-router-dom';

const EmailConfirmation = props => (
  <div>
    <h2>Thank You For Joining Us At Aplier</h2>
    <h3>Please Check Your Email to Confirm Your Identity</h3>

    <button className="homeButton">
      <Link to="/login">Login Here!</Link>
    </button>
  </div>
);
export default EmailConfirmation;
