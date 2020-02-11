import React from 'react'

import '../SideDrawer/DrawerToggleButton'
import './Navbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Navbar = props => (
  // add logic for signedIn/signedOut candidate && company
  <header className="navbar">
    <nav className="navbar_navigation">
      <div className="toggle_navbar-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navbar_logo"><a href="/">Aplier</a></div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li><a href="/myaccount">My Account</a></li>
          <li><a href="/companyaccount">Company Account</a></li>
          <li><a href="/companymatches">Matches</a></li>
          <li><a href="/candidates">Candidates</a></li>
          <li><a href="/newposition">Add Position</a></li>
          <li><a href="/positions">Positions</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/screening">Screening</a></li>
          <li><a href="/">Sign out</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Navbar
