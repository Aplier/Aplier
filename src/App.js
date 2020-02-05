import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//components
import Router from './router'
//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Router />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
