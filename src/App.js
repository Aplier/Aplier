//Libraries
import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { Router} from 'react-router-dom'

//Auth
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './Util/aws-exports';

//Components
import Routes from './router';
import Navbar from './components/Header/Navbar/Navbar';
import SideDrawer from './components/Header/SideDrawer/SideDrawer';
import Backdrop from './components/Header/Backdrop/Backdrop';
import SideDrawerCandidate from './components/Header/SideDrawer/SideDrawerCandidate';
import SideDrawerCompany from './components/Header/SideDrawer/SideDrawerCompany';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new createHttpLink({
    uri: 'http://aplier-backend.herokuapp.com/graphql',
  }),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
      isCandidateLoggedIn: false,
      isCompanyLoggedIn: false,
    };
  }

  async componentDidMount() {
    let user = await Auth.currentAuthenticatedUser();
    console.log('user', user.attributes['custom:industry']);

    if (user.attributes.firstName) {
      this.setState({ isCandidateLoggedIn: true });
      console.log('authenticated');
    } else {
      console.log('not authenticated');
      this.setState({ isCandidateLoggedIn: false });
    }

    if (user.attributes['custom:industry']) {
      this.setState({ isCompanyLoggedIn: true });
      console.log('authenticated');
    } else {
      console.log('not authenticated');
      this.setState({ isCompanyLoggedIn: false });
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
    if (this.state.isCandidateLoggedIn === true) {
      return (
        <ApolloProvider client={client}>
          <div style={{ height: '100%' }}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawerCandidate show={this.state.sideDrawerOpen} />
            {backdrop}
            <Routes />
          </div>
        </ApolloProvider>
      );
    } else if (this.state.isCompanyLoggedIn === true) {
      return (
        <ApolloProvider client={client}>
          <div style={{ height: '100%' }}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawerCompany show={this.state.sideDrawerOpen} />
            {backdrop}
            <Routes />
          </div>
        </ApolloProvider>
      );
    } else {
      return (
        <ApolloProvider client={client}>
          <div style={{ height: '100%' }}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <Routes />
          </div>
        </ApolloProvider>
      );
    }
  }
}

export default App;
