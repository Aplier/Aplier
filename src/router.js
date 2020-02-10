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
import Positions from './components/company/compostTest';
import NewPositionForm from './components/forms/newPositionForm';
import TestComp from './components/company/testComp'
import CandidateAccountView from './components/candidate/CandidateAccountView';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedInUser: true,
      isLoggedInCandidate: false,
    };
  }
  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={CompanyOrCandidate} />
        <Route path="/login" component={LoginSelector} />
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
        <Route path="/companysignup" component={CompanyForm} />
        <Route path="/candidatesignup" component={CandidateForm} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/newposition" component={NewPositionForm} />
        {/* <Route path="/positions" component={CompanyPositions} /> */}
        <Route path="/companies" component={Companies} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/positions" component={Positions} />

        <Route path="/positions" component={Positions} />
        <Route exact path="/companies" component={Companies} />
        <Route path="/candidateAccount/:id" component={CandidateAccountView} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        <Route path="/userlogin" component={UserLogin} />

        <Route exact path="/companies/:id" component={Positions} />

      </Switch>
    );
  }
}

export default Router;
