import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider }  from 'react-apollo';

//components
import Router from './router';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  state={
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <ApolloProvider client={client}>
        <div style={{height: '100%'}}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <Router />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
