//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
//Queries
import { getCompanyByIdQuery } from '../../queries/queries';

class CompanyAccount extends Component {
  displayCompanyAccountView() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Company Account...</div>;
    } else {
      console.log(this.props);
      return (
        <div>
          <div className="formContainer">
            <h3 className="welcomeAccount">Welcome {data.company.name} !</h3>
            <img
              className="circleAccount"
              src={data.company.imgURL}
              alt="ComapanyImage"
            />{' '}
            {/* <button className="customeButton" type="submit">
              Change Photo
            </button> <br/> */}
            <h4 className="accountlist">Company name</h4>
            <p className="accountListdata">{data.company.name}</p>
            <hr></hr>
            <h4 className="accountlist">Location</h4>
            <p className="accountListdata">{data.company.location}</p>
            <hr></hr>
            <h4 className="accountlist">Website</h4>
            <p className="accountListdata">{data.company.website}</p>
            <hr></hr>
            <h4 className="accountlist">Perks</h4>
            <p className="accountListdata">{data.company.perks}</p>
            <hr></hr>
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
        <div> {this.displayCompanyAccountView()}</div>
      </div>
    );
  }
}

export default graphql(getCompanyByIdQuery, {
  options: () => {
    return {
      variables: {
        id: 1,
      },
    };
  },
})(CompanyAccount);
