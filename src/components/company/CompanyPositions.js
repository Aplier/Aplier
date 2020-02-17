//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom'
import { getPositionsQuery } from '../../queries/queries';

class CompanyPositions extends Component {
  constructor() {
    super();
    this.state = {
      liked: [],
    };
    this.clickThumb = this.clickThumb.bind(this);
  }

  clickThumb(click) {
    const { id, thumb } = click;
    const positions = this.props.data.companyPositions;
    const val = positions.find(position => position.id === id);
    const index = positions.indexOf(val);
    this.props.data.companyPositions.splice(index, 1);
    if (thumb === 'up') {
      this.setState({
        liked: [...this.state.liked, id],
      });
    } else {
      this.setState({
        liked: [...this.state.liked],
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
            <h3 className="companyTitle">{position.company.name}</h3>
            <hr></hr>
            <img
              className="compImg"
              src={position.company.imgURL}
              alt="candidate img"
            />

            <h3 className="positionTitle"><center>{position.title}</center></h3>
            <div className="positionInfo">
            <p> <img alt="icon"className="icon" src="https://png.pngtree.com/svg/20151015/7cc2f4999d.png"/>  {position.description}</p>
            <p> <img alt="icon"className="icon" src="https://i.imgur.com/irB2XD0.png"/>  {position.salaryRange}</p>
            <p>{position.datePosted}</p>
            <p> <img alt="icon"className="icon" src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"/>  {position.company.location}</p>
            <p> <img alt="icon" className="icon" src="https://i.imgur.com/sFBHk3U.png"/>  {position.company.website}</p>
            </div>
            <div className='buttonsDiv'>
              <img className="thumbs2"
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
        ( positionArr && positionArr.length > 0 ?
        <div className="allPos">
          <div>{this.displayCompanyPositions()}</div>
          </div>
          :
          <div className="noCandidates">
              <p>You've reached the end of the postions available...</p>
              <img alt="comeback_later" src="https://acegif.com/wp-content/uploads/tea.gif"/>
              <p>Take a break and come back later,</p>
              <p>Check your matches <a id="github" href="/candidatematches">Here!</a></p>
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
