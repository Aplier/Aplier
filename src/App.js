import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import Router from './router';
import Navbar from './components/UI/Navbar/Navbar';
//Apollo Client

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://aplierdb.czniy2ofqmqo.us-east-2.rds.amazonaws.com',
  }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navbar />
        <Router />
      </ApolloProvider>
    );
  }
}

export default App;
