import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//components
import TestCandidates from './components/TestCandidates';
//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>TEST</h1>
          <TestCandidates />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
