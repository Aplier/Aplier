//Libraries
import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//Auth
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './Util/aws-exports';

//Components
import Router from './router';
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
    try {
      let user = await Auth.currentAuthenticatedUser();

      if (user.attributes.firstName) {
        this.setState({ isCandidateLoggedIn: true });
      } else {
        this.setState({ isCandidateLoggedIn: false });
      }

      if (user.attributes['custom:industry']) {
        this.setState({ isCompanyLoggedIn: true });
      } else {
        this.setState({ isCompanyLoggedIn: false });
      }
    } catch (error) {
      console.error(error);
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
            <Router />
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
            <Router />
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
            <Router />
          </div>
        </ApolloProvider>
      );
    }
  }
}

export default App;
