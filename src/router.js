import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import CompanyForm from './components/Auth/Signup/CompanySignup/CompanySignup';
import CandidateForm from './components/Auth/Signup/CandidateSignup/CandidateSignup';
// import NewPositionForm from './components/forms/NewPositionForm'
import LandingPage from './components/LandingPage';
//Auth
import { Auth } from 'aws-amplify';

//Signup
import SignupSelector from './components/Auth/Signup/SignUpSelector';

//Login
import LoginSelector from './components//Auth/Login/LoginSelector/LoginSelector';
import UserLogin from './components/Auth/Login/UserLogin/UserLogin';
import CandidateLogin from './components/Auth/Login/CandidateLogin/CandidateLogin';

//CandidatePages
import Candidates from './components/candidate/Candidate';
import Companies from './components/company/Companies';
import CandidateMatch from './components/candidate/CandidateMatch';
import Education from './components/candidate/CandidateEdu';

//CompanyPages
import CompanyAccount from './components/company/CompanyAccountView';
import NewPositionForm from './components/NewPositionSignup/NewPositionForm';
import CandidateAccount from './components/candidate/CandidateAccountView';
import CompanyPositions from './components/company/CompanyPositions';
import CompanyMatch from './components/company/CompanyMatch';
import ScreeningQuestions from './components/candidate/ScreeningQuestions';
import ScreeningConfirmation from './components/candidate/ScreeningConfirmation';

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCandidateLoggedIn: true,
      isUserLoggedIn: true,
    };
  }

  componentDidMount() {
    if (Auth.currentAuthenticatedUser()) {
      this.setState({ isCandidateLoggedIn: true });
    } else {
      this.setState({ isCandidateLoggedIn: false });
    }
  }

  render() {
    const { isCandidateLoggedIn } = this.state;

    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignupSelector} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/companysignup" component={CompanyForm} />
        <Route path="/newposition" component={NewPositionForm} />
        <Route path="/candidatesignup" component={CandidateForm} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        <Route path="/companies" component={Companies} />
        <Route path="/companymatches" component={CompanyMatch} />
        <Route path="/candidatematches" component={CandidateMatch} />
        <Route path="/screening" component={ScreeningQuestions} />
        <Route path="/screeningconfirmation" component={ScreeningConfirmation} />
        <Route path='/edu' component={Education} />

        <Route path="/myaccount" component={CandidateAccount} />
        <Route path="/companyaccount" component={CompanyAccount} />
        
        {this.state.isUserLoggedIn && (
          <Switch>
            <Route path="/candidates" component={Candidates} />
          </Switch>
        )}
        {this.state.isCandidateLoggedIn && (
          <Switch>
            <Route path="/myaccount" component={CandidateAccount} />
            <Route path="/positions" component={CompanyPositions} />
          </Switch>
        )}

        {/*{userSignedUp && (*/}
        {/* <Fragment>
           <Route path="/candidates" component={Candidates} />
           <Route path="/newposition" component={NewPositionForm} />
           <Route path="/positions" component={CompanyPositions} />
         </Fragment> */}
        {/*)}*/}
        {/* {isCandidate && (*/}
        {/* <Fragment>
           <Route
             path="/candidateAccount/:id"
            component={CandidateAccountView}
          />
         <Route path="/positions" component={CompanyPositions} />
         <Route path="/companies" component={Companies} />
          {/* <Route exact path="/companies" component={Companies} /> */}
        {/* </Fragment> */}
      </Switch>
    );
  }
}

export default Router;
