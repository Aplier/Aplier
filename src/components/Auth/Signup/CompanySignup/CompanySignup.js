import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addCompanyMutation } from '../../../../queries/queries';

class TestCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companySignedUp: false,
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

  signUp = async () => {
    const { name, location, industry } = this.state;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, location, industry } = this.state;
    this.props.mutate({
      variables: {
        name: name,
        location: location,
        industry: industry,
      },
    });
    this.props.history.push('/candidates');
  };

  render() {
    return (
      <div>
        <p className="miniLogo">Aplier</p>
        <div className="formContainer">
          <img
            className="circleCompany"
            src="https://i.imgur.com/vENrb8T.png"
            alt="companyImage"
          />{' '}
          <br />
          <form onSubmit={this.onSubmit.bind(this)}>
            <label className="Clabel">Company Name</label> <br />
            <input
              className="Cinput"
              onChange={event => this.setState({ name: event.target.value })}
              value={this.state.name}
              required
            />{' '}
            <br /> <br />
            <label className="Clabel">Industry</label> <br />
            <input
              className="Cinput"
              onChange={event =>
                this.setState({ industry: event.target.value })
              }
              value={this.state.industry}
            />{' '}
            <br /> <br />
            <label className="Clabel">Location</label> <br />
            <input
              className="Cinput"
              onChange={event =>
                this.setState({ location: event.target.value })
              }
              value={this.state.location}
            />{' '}
            <br /> <br />
            <button className="customeButton" type="submit">
              Sign up!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default graphql(addCompanyMutation)(TestCompanyForm);
