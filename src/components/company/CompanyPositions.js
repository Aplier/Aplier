import React, { Component } from 'react';
import { graphql} from 'react-apollo';
import TestComp from './testComp'
// import * as compose from 'lodash.flowright';
import {getPositionsQuery} from '../../queries/queries'

class CompanyPositions extends Component {
  displayCompanyPositions() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Positions...</div>;
    } else {
      console.log(this.props.data)
      return data.positions.map(position => {
        return (
          
          <div key={position.id}>
            <h5>{position.title}</h5>
            <p>{position.description}</p>
            <p>{position.salaryRange}</p>
            <p>{position.datePosted}</p>
            {/* <React.Fragment> */}
            <TestComp id={position.companyId}/>
            {/* </React.Fragment> */}
            </div>
          
        );
      });
    }
  }
  render() {
    return (
      <div>
        <div> {this.displayCompanyPositions()}</div>
      </div>
    )
  }
}

// export default compose(graphql(getPositionsQuery, {name: "getPositionsQuery"}),graphql(getCompanyByIdQuery, {name:"getCompanyByIdQuery"}))(CompanyPositions);
export default graphql(getPositionsQuery)(CompanyPositions)
