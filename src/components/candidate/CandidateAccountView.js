import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCandidateByIdQuery } from '../../queries/queries';
import { Auth } from 'aws-amplify';

class CandidateAccount extends Component {
  state = {
    info: {},
  };

  async componentDidMount() {
    const info = await Auth.currentUserInfo();
    console.log(info);
    this.setState({ info: info.attributes });
  }

  displayCandidatesAccount() {
    let data = this.props.data;
    const { info } = this.state;
    const { given_name, family_name, email, address } = info;

    if (data.loading) {
      return <div>Loading Candidate Account...</div>;
    } else {
      return (
        <div>
          <h1>
            Welcome {given_name} {family_name}
          </h1>
          <p>{address}</p>
          <p>{email}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>{this.displayCandidatesAccount()}</div>
      </div>
    );
  }
}

export default graphql(getCandidateByIdQuery, {
  options: props => {
    return {
      variables: {
        id: props.candidateId,
      },
    };
  },
})(CandidateAccount);
