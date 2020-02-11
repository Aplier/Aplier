import React from 'react';

import '../SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Amplify, { Auth } from 'aws-amplify';

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

const Navbar = props => (
  // add logic for signedIn/signedOut candidate && company
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="toggle_navbar-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar_logo">
        <a href="/">Aplier</a>
      </div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/myaccount">My Account</a>
          </li>
          <li>
            <a href="/matches">Matches</a>
          </li>
          <li>
            <a href="/newposition">Add Position</a>
          </li>
          <li type="submit" onSubmit={handleSubmit}>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
