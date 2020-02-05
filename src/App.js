import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//components
import Candidate from './components/candidates';
// import MyComponent from './components/Test'
//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          {/* <h1>TEST</h1> */}
          <Candidate/>
          {/* <MyComponent/> */}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
