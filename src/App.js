import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import { Router} from 'react-router-dom'


//Auth
import Amplify , { Auth }from 'aws-amplify';
import aws_exports from './Util/aws-exports';

//components
import Routes from './router';
import Navbar from './components/Header/Navbar/Navbar';
import SideDrawer from './components/Header/SideDrawer/SideDrawer';
import Backdrop from './components/Header/Backdrop/Backdrop';
import SideDrawerCandidate from './components/Header/SideDrawer/SideDrawerCandidate'
import SideDrawerCompany from './components/Header/SideDrawer/SideDrawerCompany'


//Apollo Client
const client = new ApolloClient({
  uri: 'http://aplier-backend.herokuapp.com/graphql',
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

  async componentDidMount() {

    let user = await Auth.currentAuthenticatedUser()

    if(user){
      this.setState({isCandidateLoggedIn: true})
      console.log('authenticated')
    }else {
      console.log('not authenticated')
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
    Amplify.configure(aws_exports);
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
      if(this.state.isCandidateLoggedIn === true) {
      console.log('THIS IS FIRST IF STAETMENT')
        return (
          <ApolloProvider client={client}>
            <div style={{ height: '100%' }}>
              <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawerCandidate show={this.state.sideDrawerOpen}/>
              {backdrop}
              <Routes />
            </div>
          </ApolloProvider>
        );
    }
    else if(this.state.isUserLoggedIn === true) {
      console.log('THIS IS SECOND IF STAETMENT')
      return (
        <ApolloProvider client={client}>
          <div style={{ height: '100%' }}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawerCompany show={this.state.sideDrawerOpen}/>
            {backdrop}
            <Routes />
          </div>
        </ApolloProvider>
      );
    }
    else {
      console.log('THIS IS THIRD IF STAETMENT')
      return (
        <ApolloProvider client={client}>
          <div style={{ height: '100%' }}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
            <Routes />
          </div>
        </ApolloProvider>
      );
    }
  }
}


export default App;
