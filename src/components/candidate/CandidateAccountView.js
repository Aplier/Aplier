//Librares
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Auth } from 'aws-amplify';
//Queries
import { getCandidateByIdQuery } from '../../queries/queries';

class CandidateAccount extends Component {
  state = {
    info: {},
  };

  async componentDidMount() {
    const info = await Auth.currentUserInfo();
    this.setState({ info: info.attributes });
  }

  async displayCandidatesAccount() {
    let data = this.props.data;
    let candidate = this.props.data.candidate;
    if (data.loading) {
      return <div>Loading Candidate Account...</div>;
    } else {
      return (
        <div>
          <div className="formContainer">
            <h3 className="welcomeAccount">Welcome {candidate.firstName}</h3>
            <img
              className="circleAccount"
              src={candidate.imgURL}
              alt="screeningImage"
            />
            <br />
            <h4 className="accountList">Full Name</h4>
            <p className="accountListData">
              {candidate.firstName} {candidate.lastName}
            </p>
            <hr></hr>
            <h4 className="accountList">Address</h4>
            <p className="accountListData">{candidate.address}</p>
            <hr></hr>
            <h4 className="accountList">Email</h4>
            <p className="accountListData">{candidate.email}</p>
            <hr></hr>
            <h4 className="accountList">Phone</h4>
            <p className="accountListData">{candidate.phone}</p>
            <hr></hr>
          </div>
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
  options: () => {
    return {
      variables: {
        email: 'tina@gmail.com',
      },
    };
  },
})(CandidateAccount);
