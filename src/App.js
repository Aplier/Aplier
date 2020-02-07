import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import Router from './router';
import Navbar from './components/UI/Navbar/Navbar';
//Apollo Client
const client = new ApolloClient({
  link: { uri: 'http://localhost:5000/graphql' },
  cache: {},
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          {/* <Navbar /> */}
          <Router />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
