import React, { Component } from 'react';
import {
  withRouter,
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.App}>
        <nav className={styles.Navbar}>
          <h2>Aplier</h2>
          <ul>
            <li>
              <Link to="/candidates">Candidates</Link>
            </li>
            <li>
              <Link to="/Companysignup">Company Sign Up</Link>
            </li>
            <li>
              <Link to="/jobs">Apply</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route path="/contacts">
            <h1>Contacts</h1>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Navbar;
