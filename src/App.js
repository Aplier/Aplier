import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Auth
import Amplify , { Auth }from 'aws-amplify';
import aws_exports from './Util/aws-exports';

//components
import Router from './router';
import Navbar from './components/Header/Navbar/Navbar';
import SideDrawer from './components/Header/SideDrawer/SideDrawer';
import Backdrop from './components/Header/Backdrop/Backdrop';
import SideDrawerCandidate from './components/Header/SideDrawer/SideDrawerCandidate'
import SideDrawerCompany from './components/Header/SideDrawer/SideDrawerCompany'


//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    sideDrawerOpen: false,
    isCandidateLoggedIn: false,
    isUserLoggedIn: false
  };
}

  componentDidMount() {
    if(Auth.currentAuthenticatedUser()){

      this.setState({isCandidateLoggedIn: true})
    }else {
      this.setState({isCandidateLoggedIn: false})
    }
  }


  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {


    const candidateSideDrawer = (props) => {
      console.log("THIS IS CADNIDATE -SIDEDRAWER")
      if(this.state.isCandidateLoggedIn){
        return <SideDrawerCandidate show={this.state.sideDrawerOpen}/>
      }else{
        return <SideDrawer show={this.state.sideDrawerOpen}/>
      }
    }

    const companySideDrawer = (props) => {
      console.log("THIS IS COMPANY-SIDEDRAWER")
      if(this.state.isUserLoggedIn){
        return <SideDrawerCompany show={this.state.sideDrawerOpen}/>
      }else{
        return <SideDrawer show={this.state.sideDrawerOpen}/>
      }
    }


    Amplify.configure(aws_exports);
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <ApolloProvider client={client}>
        <div style={{ height: '100%' }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          {candidateSideDrawer()}
          {companySideDrawer()}
          {backdrop}
          <Router />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
