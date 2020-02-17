//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCandidateQuery } from '../../queries/queries';
import Education from './CandidateEdu';

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
  constructor() {
    super();
    this.state = {
      liked: [],
    };
    this.clickThumb = this.clickThumb.bind(this);
  }

  clickThumb(click) {
    const { id, thumb } = click;
    const candidates = this.props.data.candidates;
    const val = candidates.find(candidate => candidate.id === id);
    const index = candidates.indexOf(val);
    this.props.data.candidates.splice(index, 1);
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

  displayCandidates() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidates...</div>;
    } else {
      console.log('CANDIDATE DATA======>', data.candidates);
      return data.candidates.map(candidate => {
        return (
          <div className="mapCandidates" key={candidate.id}>
            <img
              className="candidateImg"
              src={candidate.imgURL}
              alt="candidate img"
            />
            <h3>
              <center>
                {candidate.firstName} {candidate.lastName}
              </center>
            </h3>
            <p>
              <img
                alt="icon"
                className="icon"
                src="https://png.pngtree.com/svg/20151015/7cc2f4999d.png"
              />
              &nbsp;&nbsp;{candidate.intro}
            </p>

            <p>
              {' '}
              <img
                alt="icon"
                className="icon"
                src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/location-512.png"
              />
              &nbsp;&nbsp;{candidate.address}
            </p>
            {/* <p>{candidate.phone}</p> */}
            <p>
              <img
                alt="icon"
                className="icon"
                src="https://cdn3.iconfinder.com/data/icons/project-management-32/48/51-512.png"
              />
              &nbsp;&nbsp;{candidate.email}
            </p>
            <p>
              <img
                alt="icon"
                className="icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5Cj2qaC9RxT9qngLCMvMvsx7V3sAsIhTkCZdROsdiY7BUypCf"
              />
              &nbsp;&nbsp;{candidate.currentjob.position} @{' '}
              {candidate.currentjob.companyName}
            </p>
            <Education candidateId={candidate.id} />

            <div className="buttonsDiv">
              <img
                className="thumbs"
                alt="down"
                src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"
                onClick={() =>
                  this.clickThumb({ id: candidate.id, thumb: 'down' })
                }
              ></img>
              <img
                className="thumbs"
                alt="up"
                src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"
                onClick={() =>
                  this.clickThumb({ id: candidate.id, thumb: 'up' })
                }
              ></img>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    const candidateArr = this.props.data.candidates;

    return (
      <div>
        {candidateArr && candidateArr.length > 0 ? (
          <div className="candidateContainer">
            <div> {this.displayCandidates()}</div>
          </div>
        ) : (
          <div className="noCandidates">
            <p>You've reached the end of the Candidate list...</p>
            <img
              alt="comeback_later"
              src="https://acegif.com/wp-content/uploads/tea.gif"
            />
            <p>Take a break and come back later,</p>
            <p>we will have more candidates waiting for you!</p>
          </div>
        )}
      </div>
    );
  }
}

export default graphql(getCandidateQuery)(Candidate);
