import React from 'react'
import {Auth} from 'aws-amplify'

import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses= 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }

  const handleSubmit = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .then('User has signed out')
      .catch(err => console.log(err));

    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .then('User has globally signed out')
      .catch(err => console.log(err));
  };
  return (
      // add logic for signedIn/signedOut candidate && company
<nav className={drawerClasses}>
<ul>
  <li><a href="/companies">Companies</a></li>
  <li><a href="/aboutus">About us</a></li>
  <li><a href="/companymatches">Login</a></li>
  <li onClick={handleSubmit}><a href="/">Sign out</a></li>
</ul>
</nav>
  )
}

export default sideDrawer;
