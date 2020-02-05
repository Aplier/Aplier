import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import TestCandidates from './components/TestCandidates';
import TestCompanyForm from './components/TestCompanyForm';
import Home from './components/Homepage';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/testform" component={TestCompanyForm} />
          <Route path="/testcandidates" component={TestCandidates} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
