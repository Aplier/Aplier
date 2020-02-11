import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
//components
import LandingPage from './components/LandingPage';
//Auth
//Signup
import SignupSelector from './components/Auth/Signup/SignUpSelector';
import CompanySignup from './components/Auth/Signup/CompanySignup/CompanySignup';
import CandidateSignup from './components/Auth/Signup/CandidateSignup/CandidateSignup';
//Login
import LoginSelector from './components//Auth/Login/LoginSelector/LoginSelector';
import UserLogin from './components/Auth/Login/UserLogin/UserLogin';
import CandidateLogin from './components/Auth/Login/CandidateLogin/CandidateLogin';
//CandidatePages
import Candidates from './components/candidate/Candidate';
import Companies from './components/company/Companies';
// import Positions from './components/company/Positions';
import NewPositionForm from './components/NewPositionSignup/NewPositionForm';
import CandidateAccountView from './components/candidate/CandidateAccountView';
import CompanyPositions from './components/company/CompanyPositions';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignedUp: false,
      candidateSignedUp: false,
    };
  }
  handleCandidateToggle = () => {
    const { candidateSignedUp } = this.state;
    this.setState({
      candidateSignedUp: !candidateSignedUp,
    });
  };
  render() {
    const { candidateSignedUp, userSignedUp } = this.state;
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignupSelector} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/companysignup" component={CompanySignup} />
        <Route path="/candidatesignup" component={CandidateSignup} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        {/{userSignedUp && (/}
        <Fragment>
          <Route path="/candidates" component={Candidates} />
          <Route path="/newposition" component={NewPositionForm} />
          <Route path="/positions" component={CompanyPositions} />
        </Fragment>
        {/)}/}
        {/* {candidateSignedUp && (*/}
        <Fragment>
          <Route
            path="/candidateAccount/:id"
            component={CandidateAccountView}
          />
          <Route path="/positions" component={CompanyPositions} />
          <Route path="/companies" component={Companies} />
        </Fragment>
        {/)}/}
        {/* <Route exact path="/companies/:id" component={Positions} /> */}
      </Switch>
    );
  }
}
export default Router;





