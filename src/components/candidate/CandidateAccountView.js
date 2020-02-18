import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCandidateByIdQuery } from '../../queries/queries';
import { Auth } from 'aws-amplify';
class CandidateAccount extends Component {
  state = {
    info: {},
  };
  async componentDidMount() {
    try {
      const info = await Auth.currentUserInfo();
      this.setState({ info: info.attributes });
    } catch (error) {
      console.error(error);
    }
  }
  displayCandidatesAccount() {
    let data = this.props.data;
    let candidate = this.props.data.candidate;
    console.log('data', data);
    // const { info } = this.state;
    // const { given_name, family_name, email, address } = info;
    if (data.loading) {
      return <div>Loading Candidate Account...</div>;
    } else {
      console.log(this.props);
      return (
        <div>
          <div className="formContainer">
            <h3 className="welcomeAccount">Welcome {candidate.firstName}</h3>
            <img
              className="circleAccount"
              src="https://i.imgur.com/tEcU43K.png"
              alt="screeningImage"
            />{' '}
            {/* <button className="customeButton" type="submit">
              Change Photo
            </button>{' '} */}
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
            {/* <h4 className="accountList">Intro</h4>
            <p className="accountListData">{data.candidate.intro}</p>
            <hr></hr> */}
            {/* <button className="customeButton" type="submit">
              Edit Account
            </button> */}
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
