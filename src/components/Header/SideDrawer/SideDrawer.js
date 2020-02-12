import React from 'react'
import {Auth} from 'aws-amplify'

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
  <li><a href="/companies">Companies</a></li>
  <li><a href="/aboutus">About us</a></li>
  <li><a href="/login">Login</a></li>
</ul>
</nav>
  )
}

export default sideDrawer;
