import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class CompanyAccountView extends Component {
  displayCompanysAccountView() {

    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Company Account...</div>;
    } else {

    }
  }
  render() {
    return (
      <div>
          <div> {this.displayCompanysAccountView()}</div>
      </div>
    )
  }
}

export default graphql(CompanyAccountView);
