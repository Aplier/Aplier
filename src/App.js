import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { ApolloProvider } from 'react-apollo';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { HttpLink, InMemoryCache, gql } from 'apollo-boost';
// import { createHttpLink } from 'apollo-link-http';
import Router from './router';
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:5000/graphql',
});
const client = new ApolloClient({
  cache,
  link,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  },
});
//components
// import Navbar from './components/UI/Navbar/Navbar';
//Apollo Client
// const link = createHttpLink({ uri: 'http://localhost:5000/graphql' });
// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql',
// cache: new InMemoryCache(),
// });

Amplify.configure(aws_exports);

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
