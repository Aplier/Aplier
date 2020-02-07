import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getCompanyByIdQuery} from '../../queries/queries'

class TestComp extends Component {
  displayCompany() {
    let data = this.props.data;
    console.log(data)
    if (data.loading) {
      return <div>Loading Companies...</div>;
    } else {
        console.log('WHAT IS PROPS', this.props.data.company)
        const {name, location, perks, website} = this.props.data.company

    return (
        <div>
    <p>{name}</p>
    <p>{location}</p>
    <p>{perks}</p>
    <p>{website}</p>
    </div>
    )
  }
}
  render() {
    return (
      <div>
         <div> {this.displayCompany()}</div>
       </div>
    )
  }

}

export default graphql(getCompanyByIdQuery, {
    options:(props) => {
        return {
            variables:{
                id:props.companyId
            }
        }
    }
})(TestComp);