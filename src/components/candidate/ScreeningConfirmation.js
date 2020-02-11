import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ScreeningConfirmation = () => {
  return (
    <div className="screeningConfirmPage">
          <img alt="matchImg"src="https://media3.giphy.com/media/3JTrNZgdf4LJGNUN1a/giphy.gif?cid=790b76111e65be95354857bbaef8eb6cdcb61336842cc5a0&rid=giphy.gif"/>
    <h3>Congratulations!</h3>
    <br/>
    <p> You're Questions Have Been Submitted For Review</p>
        <br></br>
        <br></br>
        <p>Keep Finding More Matches!</p>
        <br></br>
        <br></br>
        <button className='customeButton'>
            <Link to="/positions">More Positions</Link>
          </button>
    </div>

  )
}

export default ScreeningConfirmation
