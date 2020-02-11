import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCandidateByIdQuery} from '../../queries/queries'


class CandidateAccount extends Component {

  onSubmit(event) {
    event.preventDefault()
    this.props.history.push('/canididateaccountview')
  }

  displayCandidatesAccount() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidate Account...</div>
    } else {
      return (
      <div>
        <div className="formContainer">
          <h3 className="welcomeAccount">Welcome {data.candidate.firstName}</h3>
          <img
            className="circleAccount"
            src={data.candidate.imgURL}
            alt="screeningImage"
          />{' '}
          <button className="customeButton" type="submit">
            Change Photo
          </button> <br/>
          <h4 className="accountList">Full Name</h4>
          <p className="accountListData">{data.candidate.firstName} {data.candidate.lastName}</p>
          <hr></hr>
          <h4 className="accountList">Address</h4>
          <p className="accountListData">{data.candidate.address}</p>
          <hr></hr>
          <h4 className="accountList">Email</h4>
          <p className="accountListData">{data.candidate.email}</p>
          <hr></hr>
          <h4 className="accountList">Phone</h4>
          <p className="accountListData">{data.candidate.phone}</p>
          <hr></hr>
          <h4 className="accountList">Intro</h4>
          <p className="accountListData">{data.candidate.intro}</p>
          <hr></hr>
          <button className="customeButton" type="submit">
            Edit Account
          </button>
        </div>
      </div>
      )
    }
  }

  render() {
    return (
      <div>
          <div> {this.displayCandidatesAccount()}</div>
      </div>
    )
  }
}

export default graphql(getCandidateByIdQuery, {
    options: () => {
      return {
        variables: {
          id: 1
        }
      }
    }
})(CandidateAccount)
