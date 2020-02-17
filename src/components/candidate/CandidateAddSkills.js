//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
// import a addSkillMutation ??

class CandidateAddSkill extends Component {
  render() {
    return (
      <div>
        <h1>Aplier</h1>

        {/* CANIDATE IMAGE */}

        <h1> Hey ${name}! lets add some skills! </h1>
        {/*  render a list of skills as buttons or selections
        you can select as much as you want */}

        {/* submit button */}
      </div>
    );
  }
}

export default graphql(CandidateAddSkill);
