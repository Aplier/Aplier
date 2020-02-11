import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getEduById } from '../../queries/queries'

class Education extends Component {
  displayEducation() {
    let data = this.props.data;
    if(data.loading) {
      return <div>Loading Education...</div>
    } else {
        console.log('MY DATA', data)
      return (
      <div>
        <div className="edu">
        <p>{data.education[0].name}</p>
        <p>{data.education[0].major}</p>
        </div>
      </div>
      )
    }
  }
  render() {
    return (
      <div>
        <div>{this.displayEducation()}</div>
      </div>
    )
  }
}

export default graphql(getEduById, {
  options: (props) => {
    return{
      variables: {
        candidateId:parseInt(props.candidateId,10)
      }
    }
  }
})(Education)

