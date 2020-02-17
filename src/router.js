//Libraries
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import CompanyForm from './components/Auth/Signup/CompanySignup/CompanySignup';
import CandidateForm from './components/Auth/Signup/CandidateSignup/CandidateSignup';
import AboutUs from './components/AboutUs';
import LandingPage from './components/LandingPage';

//Auth
import { Auth } from 'aws-amplify';

//Signup
import SignupSelector from './components/Auth/Signup/SignUpSelector';

//Login
import LoginSelector from './components/Auth/Login/LoginSelector/LoginSelector';
import CompanyLogin from './components/Auth/Login/CompanyLogin/CompanyLogin';
import CandidateLogin from './components/Auth/Login/CandidateLogin/CandidateLogin';
import EmailConfirmation from './components/Auth/Signup/EmailConfirmation';

//CandidatePages
import Candidates from './components/candidate/Candidate';
import Companies from './components/company/Companies';
import CandidateAccount from './components/candidate/CandidateAccountView';
import CandidateMatch from './components/candidate/CandidateMatch';
// import Education from './components/candidate/CandidateEdu';

//CompanyPages
import CompanyAccount from './components/company/CompanyAccountView';
import NewPositionForm from './components/NewPositionSignup/NewPositionForm';
import CompanyPositions from './components/company/CompanyPositions';
import CompanyMatch from './components/company/CompanyMatch';
import ScreeningQuestions from './components/candidate/ScreeningQuestions';
import ScreeningConfirmation from './components/candidate/ScreeningConfirmation';
import PositionConfirmation from './components/company/PositionConfirmation';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCandidateLoggedIn: false,
      isCompanyLoggedIn: false,
    };
  }

  async componentDidMount() {
    let user = await Auth.currentAuthenticatedUser();
    if (user) {
      this.setState({ isCandidateLoggedIn: true });
    } else {
      this.setState({ isCandidateLoggedIn: false });
    }
  }

  render() {
    const { isCandidateLoggedIn, isCompanyLoggedIn } = this.state;

    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignupSelector} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/companysignup" component={CompanyForm} />
        <Route path="/candidatesignup" component={CandidateForm} />
        <Route path="/companylogin" component={CompanyLogin} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        <Route path="/companies" component={Companies} />
        <Route path="/candidatematches" component={CandidateMatch} />
        <Route path="/screening" component={ScreeningQuestions} />
        <Route path="/confirmemail" component={EmailConfirmation} />
        <Route path="/newpositionadded" component={PositionConfirmation} />
        <Route path="/companyaccount" component={CompanyAccount} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/positions" component={CompanyPositions} />

        <Route
          path="/screeningconfirmation"
          component={ScreeningConfirmation}
        />
        {isCompanyLoggedIn && (
          <Switch>
            <Route path="/candidates" component={Candidates} />
            <Route path="/companyaccount" component={CompanyAccount} />
            <Route path="/newposition" component={NewPositionForm} />
            <Route path="/companymatches" component={CompanyMatch} />
          </Switch>
        )}
        {isCandidateLoggedIn && (
          <Switch>
            <Route path="/myaccount" component={CandidateAccount} />
            <Route path="/positions" component={CompanyPositions} />
          </Switch>
        )}
      </Switch>
    );
  }
}

export default Routes;
