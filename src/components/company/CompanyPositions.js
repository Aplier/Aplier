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
    this.clickThumb = this.clickThumb.bind(this);
  }

  clickThumb(click){
    const {id, thumb} = click;
    const positions = this.props.data.companyPositions;
    const val = positions.find(position => position.id === id);
    const index = positions.indexOf(val);
    this.props.data.companyPositions.splice(index,1);
    if(thumb === "up") {
      this.setState({
        liked: [...this.state.liked, id]
      });
    } else {
      this.setState({
        liked: [...this.state.liked]
      });
    }
  }

  displayCompanyPositions() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Positions...</div>;
    } else {
      return data.companyPositions.map(position => {
        return (
          <div className="mapPos" key={position.id}>
            <img
              className="compImg"
              src={position.company.imgURL}
              alt="candidate img"
            />

            <h3>{position.title}</h3>
            <p>{position.description}</p>
            <p>{position.salaryRange}</p>
            <p>{position.datePosted}</p>
            <p>{position.company.name}</p>
            <p>{position.company.location}</p>
            <p>{position.company.website}</p>
            <div>
              <img className="thumbs"
                   alt="down" src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"
                   onClick={()=>this.clickThumb({id: position.id, thumb: "down"})}>
              </img>
              <img className="thumbs"
                   alt="up" src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"
                   onClick={()=>this.clickThumb({id: position.id, thumb: "up"})}>
              </img>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    const positionArr = this.props.data.companyPositions;

    return (
      <div>
        <p className="miniLogo">Aplier</p>
        {
          positionArr && positionArr.length > 0 ?
          <div className="allPos"> {this.displayCompanyPositions()}</div>
          :
          <div>
            <h1>Harold</h1>
          </div>
        }
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
