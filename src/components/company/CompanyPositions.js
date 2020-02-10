import React, { Component } from 'react';
import { graphql } from 'react-apollo';
// import TestComp from './testComp'
// import * as compose from 'lodash.flowright';
import { getPositionsQuery } from '../../queries/queries';

class CompanyPositions extends Component {
  constructor() {
    super();
    this.state = {
      liked: [],
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(candidateId) {
    this.state.liked.push(candidateId);
    this.props.history.push('/candidates');
  }

  displayCompanyPositions() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Positions...</div>;
    } else {
      console.log('WHAT IS MY PROPS', this.props);
      return data.positions.map(position => {
        return (
          <div className="mapPos" key={position.id}>
            <h3>{position.title}</h3>
            <p>{position.description}</p>
            <p>{position.salaryRange}</p>
            <p>{position.datePosted}</p>
            {/* <React.Fragment> */}
            {/* <TestComp id={position.companyId}/> */}
            {/* </React.Fragment> */}
            <img
              className="thumbs"
              alt="down"
              src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"
            ></img>
            <img
              onClick={() => this.onClick(position.id)}
              className="thumbs"
              alt="up"
              src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"
            ></img>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <div className="allPos"> {this.displayCompanyPositions()}</div>
      </div>
    );
  }
}

// export default compose(graphql(getPositionsQuery),graphql(getCompanyByIdQuery
//   , {
//     options:(props) => {
//         return {
//             variables:{
//                 id:1
//             }
//         }
//     }
// }
//   ))(CompanyPositions);
export default graphql(getPositionsQuery)(CompanyPositions);
