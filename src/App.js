import React from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-boost';
import Router from './router';

// const client = new ApolloClient({
//   link: { uri: new HttpLink('/graphql') },
//   cache: new InMemoryCache(),
// });

//components
// import Navbar from './components/UI/Navbar/Navbar';
// Apollo Client

const App = props => {
  const link = new HttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials: 'same-origin',
  });

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  Amplify.configure(aws_exports);

  return (
    <ApolloProvider client={client}>
      <div>
        {/* <Navbar /> */}
        <Router />
      </div>
    </ApolloProvider>
  );
};

export default App;
