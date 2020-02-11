import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCandidateQuery} from '../../queries/queries';

// const getCandidate = graphql(getCandidateQuery,{
//   props:({data}) => ({
//       loadingCandidate :data.loading,
//       candidates:data.candidates,
//   })
// })

// const getCandidate = graphql(getCandidateQuery,{
//   props:({data}) => ({
//       loadingCandidate :data.loading,
//       candidates:data.candidates,
//   })
// })



class Candidate extends Component {
  constructor(){
    super()
    this.state = {
      liked:[],
      isHidden: true
    }
    this.clickLike= this.clickLike.bind(this)
    this.toggleHidden = this.toggleHidden.bind(this)
  }
  clickLike(candidateId){
    this.state.liked.push(candidateId)
    this.props.history.push('/candidates')
  }
  toggleHidden(){
    this.setState({
      isHidden:!this.state.isHidden
    })
  }


  displayCandidates() {
    let data = this.props.data;
    if (data.loading) {

      return <div>Loading Candidates...</div>;
    } else {
      return data.candidates.map(candidate => {
        return (
          <div className="mapCandidates" key={candidate.id}>
            <img src={candidate.imgURL} alt="candidate img" />
            <h3>
              {candidate.firstName} {candidate.lastName}
            </h3>
            <p>{candidate.address}</p>
            {/* <p>{candidate.phone}</p> */}
            <p>{candidate.email}</p>
            <p>{candidate.intro}</p>
            <p>PLACE HOLDER FOR EDU</p>
            <p>PLACE HOLDER FOR CURRENT JOB</p>
            <p>PLACE HOLDER FOR PREVIOUS JOB</p>
            <div>
            <img onClick={()=>this.toggleHidden()}className="thumbs" alt='down'src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"></img>
            <img onClick={()=>this.clickLike(candidate.id)}className="thumbs" alt='up'src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"></img>
            </div>
          </div>

        )
      })
    }
  }
  render() {
    console.log('STATE', this.state)
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <div className="allCandidates"> {this.displayCandidates()}</div>
      </div>
    );
  }
}

export default graphql(getCandidateQuery)(Candidate);
