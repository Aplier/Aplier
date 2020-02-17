//Libraries
import React from 'react';

//CSS
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/companies">Companies</a>
        </li>
        <li>
          <a href="/aboutus">About us</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
