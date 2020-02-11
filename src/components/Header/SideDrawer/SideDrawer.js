import React from 'react'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses= 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
      // add logic for signedIn/signedOut candidate && company
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/myaccount">My Account</a></li>
        <li><a href="/matches">Matches</a></li>
        <li><a href="/candidates">Candidates</a></li>
        <li><a href="/newposition">Add Position</a></li>
        <li><a href="/positions">Positions</a></li>
        <li><a href="/companies">Companies</a></li>
        <li><a href="/screening">Screening</a></li>
        <li><a href="/">Sign out</a></li>

      </ul>
    </nav>
  )
}

export default sideDrawer;
