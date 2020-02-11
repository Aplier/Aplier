import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getScreeningByPositionByIdQuery } from '../../queries/queries'

class ScreeningQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screeningQ1: '',
      screeningQ2: '',
      screeningQ3: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push('/screeningconfirmation')
  }

  displayScreeningQuestions() {
    let data = this.props.data;
    console.log(this.props)
    if (data.loading) {
      return <div>Loading Screening Questions...</div>
    } else {
      return (
      <div>
        <div className="formContainer">
          <img
            className="circleScreening"
            src="https://i.imgur.com/w7gyV0L.png"
            alt="screeningImage"
            />{' '}
            <br/>
          <form onSubmit={this.onSubmit.bind(this)}>
              <label className="Clabel">{data.companyPosition.screeningQ1}</label> <br/>
                <input
                  className="Cinput"
                  onChange={event => this.setState({ screeningQ1: event.target.value })}
                  value={this.state.screeningQ1}
                  required
                />{' '}
                <br/> <br/>
              <label className="Clabel">{data.companyPosition.screeningQ2}</label> <br/>
                <input
                  className="Cinput"
                  onChange={event => this.setState({ screeningQ2: event.target.value })}
                  value={this.state.screeningQ2}
                  required
                />{' '}
                <br/> <br/>
              <label className="Clabel">{data.companyPosition.screeningQ3}</label> <br/>
                <input
                  className="Cinput"
                  onChange={event => this.setState({ screeningQ3: event.target.value })}
                  value={this.state.screeningQ3}
                  required
                />{' '}
                <br/> <br/>
              <button className="customeButton" type="submit">
                Complete Screening
              </button>
          </form>
        </div>
      </div>
      );
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

export default graphql(getScreeningByPositionByIdQuery, {
  options: () => {
    return {
      variables: {
        id:1
      }
    }
  }
})(ScreeningQuestions)

