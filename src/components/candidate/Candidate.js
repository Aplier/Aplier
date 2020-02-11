import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCandidateQuery} from '../../queries/queries';
import Education from './CandidateEdu'

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
    }
    this.clickThumb= this.clickThumb.bind(this)
  }

  clickThumb(click){
    const {id, thumb} = click;
    const candidates = this.props.data.candidates;
    const val = candidates.find(candidate => candidate.id === id);
    const index = candidates.indexOf(val);
    this.props.data.candidates.splice(index,1);
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
            
            <p> <img alt="icon"className="icon" src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"/> {candidate.address}</p>
            {/* <p>{candidate.phone}</p> */}
            <p>{candidate.email}</p>
            <p>{candidate.intro}</p>
            <Education candidateId={candidate.id}/>
            <div>
              <img className="thumbs"
                   alt='down'src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"
                   onClick={()=>this.clickThumb({id: candidate.id, thumb: "down"})}>
              </img>
              <img className="thumbs"
                   alt='up'src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"
                   onClick={()=>this.clickThumb({id: candidate.id, thumb: "up"})}>
              </img>
            </div>
          </div>

        )
      })
    }
  }
  render() {
    const candidateArr = this.props.data.candidates
    console.log('MY ARR', candidateArr)

      return (
        <div>
          <p className="miniLogo">Aplier</p>
            {candidateArr&&candidateArr.length>0?
            <div className="allCandidates"> {this.displayCandidates()}</div>
            :
            <div className="noCandidates">
              <p>You've reached the end of the Candidate list...</p>
              <img alt="comeback_later" src="https://acegif.com/wp-content/uploads/tea.gif"/>
              <p>Take a coffee break and come back later,</p>
              <p>we will have more candidates waiting for you!</p>

            </div>
          }
        </div>
      );
  }
}

export default graphql(getCandidateQuery)(Candidate);
