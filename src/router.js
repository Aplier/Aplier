import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import CompanyForm from './components/forms/CompanyForm';
import CandidateForm from './components/forms/CandidateForm';
import LandingPage from './components/LandingPage';
import CompanyOrCandidate from './components/CompanyOrCandidate';
import Candidates from './components/candidate/Candidate';
import Companies from './components/company/Companies';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/user" component={CompanyOrCandidate} />
        <Route path="/companysignup" component={TestCompanyForm} />
        <Route path="/candidatesignup" component={CandidateForm} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/companies" component={Companies} />
      </Switch>
    );
  }
}

export default Router;
