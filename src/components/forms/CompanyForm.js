import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {addCompanyMutation} from '../../queries/queries'

class TestCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      industry: '',
      perks: '',
      website: '',
      imgURL: '',
      vidURL: '',
      users: [],
      positions: [],
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        location: this.state.location,
        industry: this.state.industry,
      },
    });
  }

  render() {
    return (
      // turns background blue
      // <div className="Cform">
      <div>
        <p className="miniLogo">Aplier</p>
        <div className="formContainer">
          <img className="circleCompany"
          src="http://tny.im/kIl"
          alt="companyImage"
          /> <br />
          <form onSubmit={this.onSubmit.bind(this)}>
            <label className="Clabel">Company Name</label> <br />
            <input
              className="Cinput"
              onChange={event => this.setState({ name: event.target.value })}
              value={this.state.name}
              required
            /> <br /> <br />
            <label className="Clabel">Industry</label> <br />
            <input
              className="Cinput"
              onChange={event => this.setState({ industry: event.target.value })}
              value={this.state.industry}
            /> <br /> <br />
            <label className="Clabel">Location</label> <br />
            <input
              className="Cinput"
              onChange={event => this.setState({ location: event.target.value })}
              value={this.state.location}
            /> <br /> <br />
            <button className="customeButton" type="submit">Sign up!</button>
          </form>
        </div>
      </div>

    );
  }
}

export default graphql(addCompanyMutation)(TestCompanyForm);
