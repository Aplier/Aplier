import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import CompanyForm from './components/forms/CompanyForm';
import CandidateForm from './components/forms/CandidateForm';
import LandingPage from './components/LandingPage';
import CompanyOrCandidate from './components/CompanyOrCandidate';
import Candidates from './components/candidate/Candidate';
import Companies from './components/company/Companies';
import UserLogin from './components/Login/UserLogin/UserLogin';
import CandidateLogin from './components/Login/CandidateLogin/CandidateLogin';
import LoginSelector from './components/Login/LoginSelector/LoginSelector';
import CompanyPositions from './components/company/CompanyPositions';
import TestComp from './components/company/testComp';
import NewPositionForm from './components/forms/NewPositionForm';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedInUser: false,
      isLoggedInCandidate: false,
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/user" component={CompanyOrCandidate} />
        <Route path="/signup" component={CandidateLogin} />
        <Route path="/companysignup" component={CompanyForm} />
        <Route path="/candidatesignup" component={CandidateForm} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        {this.state.isLoggedInUser && (
          <Route path="/candidates" component={Candidates} />
        )}
        {this.state.isLoggedInCandidate && (
          <Route path="/companies" component={Companies} />
        )}
      </Switch>
    );
  }
}

export default Router;
