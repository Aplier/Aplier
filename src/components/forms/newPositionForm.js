import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {addCompanyPositionMutation} from '../../queries/queries'

class NewPositionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      salarayRange: '',
      screeningQ1: '',
      screeningQ2: '',
      screeningQ3: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title,
        description: this.state.description,
        salaryRange: this.state.salarayRange,
        screeningQ1: this.state.screeningQ1,
        screeningQ2: this.state.screeningQ1,
        screeningQ3: this.state.screeningQ1
      },
    });
  }

  render() {
    return (
      <div>
        <h3>ADD NEW POSITION</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Enter Position title:</label>
          <input
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
          <label>Enter Description:</label>
          <input
            onChange={event => this.setState({ description: event.target.value })}
            value={this.state.description}
          />
          <label>Enter Salary</label>
          <input
            onChange={event => this.setState({ salarayRange: event.target.value })}
            value={this.state.salarayRange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default graphql(addCompanyPositionMutation)(NewPositionForm);
