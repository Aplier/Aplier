import React from 'react';

import '../SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Auth } from 'aws-amplify';

const handleSubmit = async () => {
  await Auth.signOut()
    .then(data => console.log(data))
    .then('User has signed out')
    .catch(err => console.log(err));

  await Auth.signOut({ global: true });
};

const Navbar = props => (
  // add logic for signedIn/signedOut candidate && company
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="toggle_navbar-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar_logo">

        <a href="/">A p l i e r</a>
      </div>
      <div className="spacer" />
    </nav>
  </header>
);

export default Navbar;
