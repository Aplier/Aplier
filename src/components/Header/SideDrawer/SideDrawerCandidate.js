
import React from 'react'
import {Auth} from 'aws-amplify'

import './SideDrawer.css'

const sideDrawerCandidate = props => {
  let drawerClasses= 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }

  const handleSubmit = async () => {
    try {
      await Auth.signOut()
      await Auth.signOut({ global: true })
    } catch (error) {
      console.log(error)
    }
  };
  return (
      <nav className={drawerClasses}>
      <ul>

        <li><a href="/myaccount">My Account</a></li>
        <li><a href="/candidatematches">Matches</a></li>
        <li><a href="/aboutus">About us</a></li>
        <li><a href="/positions">Positions</a></li>
        <li><a href="/companies">Companies</a></li>
        <li onClick={handleSubmit}><a href="/">Sign out</a></li>
      </ul>
      </nav>

  )
}

export default sideDrawerCandidate;
