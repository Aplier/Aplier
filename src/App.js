import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Auth
import Amplify from 'aws-amplify';
import aws_exports from './Util/aws-exports';

//components
import Router from './router';
import Navbar from './components/Header/Navbar/Navbar';
import SideDrawer from './components/Header/SideDrawer/SideDrawer';
import Backdrop from './components/Header/Backdrop/Backdrop';

//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

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

// import { InMemoryCache } from 'apollo-cache-inmemory';
// import ApolloClient from 'apollo-client';
// import { HttpLink } from 'apollo-boost';

//components
// import Navbar from './components/UI/Navbar/Navbar';
// Apollo Client

// const App = props => {
//   const link = new HttpLink({
//     uri: 'http://localhost:4000/graphql',
//     credentials: 'same-origin',
//   });

//   const client = new ApolloClient({
//     link: link,
//     cache: new InMemoryCache(),
//   });

export default App;
