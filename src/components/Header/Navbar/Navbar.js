//Libraries
import React from 'react';

//Components
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

//CSS
import './Navbar.css';

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
