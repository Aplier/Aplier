//Libraries
import React from 'react';
import { Link } from 'react-router-dom';

const PositionConfirmation = () => {
  return (
    <div className="screeningConfirmPage">
      <img
        alt="matchImg"
        src="https://media3.giphy.com/media/3JTrNZgdf4LJGNUN1a/giphy.gif?cid=790b76111e65be95354857bbaef8eb6cdcb61336842cc5a0&rid=giphy.gif"
      />
      <h3>Congratulations!</h3>
      <br />
      <p> New Position added </p>
      <br></br>
      <br></br>
      <button className="customeButton">
        <Link to="/newposition">Add Another Position</Link>
      </button>
      <br></br>
      <br></br>
      <button className="customeButton">
        <Link to="/companyaccount">Go Back To Account</Link>
      </button>
    </div>
  );
};

export default PositionConfirmation;
