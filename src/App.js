import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//components
import Router from './router';
import Navbar from './components/UI/Navbar';
//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar />
          <Router />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
