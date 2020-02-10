import React, { Component } from 'react';
import { ApolloClient } from 'apollo-boost';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react';
import { ApolloProvider } from 'react-apollo';

//components
import Router from './router';
// import Navbar from './components/UI/Navbar/Navbar';
//Apollo Client
const client = new ApolloClient({
  link: { uri: 'http://localhost:5000/graphql' },
  cache: {},
});

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
