import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import CompanyForm from './components/forms/CompanyForm';
import CandidateForm from './components/forms/CandidateForm';
import LandingPage from './components/LandingPage';
import CompanyOrCandidate from './components/CompanyOrCandidate';
import Candidates from './components/candidate/Candidate';
import Companies from './components/company/Companies';
<<<<<<< HEAD
import UserLogin from './components/Login/UserLogin/UserLogin';
import CandidateLogin from './components/Login/CandidateLogin/CandidateLogin';
import LoginSelector from './components/Login/LoginSelector/LoginSelector';
=======
import CompanyPositions from './components/company/CompanyPositions';
import TestComp from './components/company/testComp';
import NewPositionForm from './components/forms/NewPositionForm';
>>>>>>> 4839622a2d1979f41fc13b8852fdac4ef2fb04ea

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={CandidateLogin} />
        <Route path="/user" component={CompanyOrCandidate} />
        <Route path="/companysignup" component={CompanyForm} />
        <Route path="/candidatesignup" component={CandidateForm} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/companies" component={Companies} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        <Route path="/userlogin" component={UserLogin} />
      </Switch>
=======
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={CompanyOrCandidate} />
          <Route path="/companysignup" component={CompanyForm} />
          <Route path="/candidatesignup" component={CandidateForm} />
          <Route path="/newPosition" component={NewPositionForm} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/companies" component={Companies} />
          <Route path="/positions" component={CompanyPositions} />
          <Route path="/fml" component={TestComp} />
        </Switch>

>>>>>>> 4839622a2d1979f41fc13b8852fdac4ef2fb04ea
    );
  }
}

export default Router;
