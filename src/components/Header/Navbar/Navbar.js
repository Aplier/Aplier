import React from 'react';

import '../SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Auth } from 'aws-amplify';

const handleSubmit = async () => {
  try {
    await Auth.signOut()
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log(error);
  }
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
    </nav>
  </header>
);

export default Navbar;
