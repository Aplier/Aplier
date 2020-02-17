//Libraries
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getEduById } from '../../queries/queries';

class Education extends Component {
  displayEducation() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Education...</div>;
    } else {
      return (
        <div>
          <div className="edu">
            <p>
              <img
                alt="icon"
                className="icon"
                src="https://cdn1.iconfinder.com/data/icons/back-to-school-37/24/school-512.png"
              />
              &nbsp;&nbsp;{data.education[0].name}
            </p>
            <p>
              <img
                alt="icon"
                className="icon"
                src="https://cdn1.iconfinder.com/data/icons/cv-resume-1/32/23-512.png"
              />
              &nbsp;&nbsp;{data.education[0].major}
            </p>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>{this.displayEducation()}</div>
      </div>
    );
  }
}

export default graphql(getEduById, {
  options: props => {
    return {
      variables: {
        candidateId: parseInt(props.candidateId, 10),
      },
    };
  },
})(Education);
