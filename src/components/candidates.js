import React, { Component, useRef} from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import SwipeableViews from 'react-swipeable-views';
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import clamp from 'lodash-es/clamp'





const getCandidateQuery = gql`
  {
    candidates {
      id
      imgURL
      firstName
      lastName
      intro
      address
      email
    }
  }
`;

// const styles = {
//     slide: {
//       padding: 15,
//       minHeight: 100,
//     }
// }

class Candidates extends Component {
  displayCandidates() {
    console.log(this.props.data)
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Candidates...</div>;
    } else {
      return data.candidates.map(candidate => {
        return (
            
          <div key={candidate.id}  className="CandidatesView">
            <img src={candidate.imgURL} alt="candidate img"/>
            <h5>{candidate.firstName} {candidate.lastName}</h5>
            <p>{candidate.address}</p>
            <p>{candidate.email}</p>
            <p>{candidate.intro}</p>
            <p>PLACE HOLDER FOR EDU</p>
            <p>PLACE HOLDER FOR CURRENT JOB</p>
            <p>PLACE HOLDER FOR PREVIOUS JOB</p>
          </div>
        );
      });
    }
  }

// Viewpager() {
//     let candidates = this.props.data.candidates;
//     const index = useRef(0)
//     const [props, set] = useSprings(candidates.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
//     const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
//       if (down && distance > window.innerWidth / 2)
//         cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, candidates.length - 1)))
//       set(i => {
//         if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
//         const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
//         const sc = down ? 1 - distance / window.innerWidth / 2 : 1
//         return { x, sc, display: 'block' }
//       })
//     })
//     return props.map(({ x, display, sc }, i) => (
//         <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
//           <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${candidates[i]})` }} />
//         </animated.div>
//       ))
    
//     }



  render() {
      return (
        <div>{this.displayCandidates()}</div>

      )
  }
}
    // return (
       
    //     // <SwipeableViews>
    //            
    //     // </SwipeableViews>
    // )
  

export default graphql(getCandidateQuery)(Candidates);
