import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import TestCompanyForm from './components/company/TestCompanyForm';
import TestCandidateForm from './components/candidate/TestCandidateForm'
import LandingPage from './components/LandingPage';
import CompanyOrCandidate from './components/CompanyOrCandidate'
import Candidates from './components/candidate/Candidate'

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
          <Route exact path="/" component={LandingPage} />
          <Route path="/user" component={CompanyOrCandidate} />
          <Route path="/companysignup" component={TestCompanyForm} />
          {/* <Route path="/candidatesignup" component={TestCandidateForm} /> */}
          <Route path="/candidates" component={Candidates} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
