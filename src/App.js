import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import Router from './router';
import Navbar from './components/UI/Navbar/Navbar';
//Apollo Client
const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://aplierdb.czniy2ofqmqo.us-east-2.rds.amazonaws.com',
//   }),
//   cache: new InMemoryCache(),
    uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  componentDidMount() {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: 'https://aplierdb.czniy2ofqmqo.us-east-2.rds.amazonaws.com',
      }),
      cache: new InMemoryCache(),
    });
  }

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
