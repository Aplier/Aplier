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
      liked:[]
    }
    this.onClick= this.onClick.bind(this)
  }
  onClick(candidateId){
    this.state.liked.push(candidateId)
    this.props.history.push('/candidates')
  }



  displayCandidates() {
    let data = this.props.data;
    if (data.loading) {
      console.log(data)
      return <div>Loading Candidates...</div>;
    } else {
      return data.candidates.map(candidate => {
        console.log(data)
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

            <img className="thumbs" alt='down'src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"></img>
            <img onClick={()=>this.onClick(candidate.id)}className="thumbs" alt='up'src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"></img>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    console.log('object');
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <div className="allCandidates"> {this.displayCandidates()}</div>
      </div>
    );
  }
}

export default graphql(getCandidateQuery)(Candidate);
