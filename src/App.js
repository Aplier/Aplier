import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//components
import Candidates from './components/candidates';
// import MyComponent from './components/Test'
//Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          {/* <h1>TEST</h1> */}
          <Candidates/>
          {/* <MyComponent/> */}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
