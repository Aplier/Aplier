import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getPositionsQuery } from '../queries/queries'

class ScreeningQuestions extends Component {



  displayScreeningQuestions() {
    let data = this.props.data;
    console.log(data)
    if(data.loading) {
      return <div>Loading Screening Questions...</div>
    } else {
      return (
      <div>
      <p>{data.companyPositions.screeningQ1}</p>
      </div>
      )
    }
  }
// need query for screenings questions
  render() {
    return (
      <div>
        <div>{this.displayScreeningQuestions()}</div>
      </div>
    )
  }
}

export default graphql(getPositionsQuery)(ScreeningQuestions)

