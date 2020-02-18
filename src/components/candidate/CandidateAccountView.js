import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';
import { getCandidateByIdQuery } from '../../queries/queries';
import { Auth } from 'aws-amplify';

class CandidateAccount extends Component {
  state = {
    info: {},
  };

  async componentDidMount() {
    const info = await Auth.currentUserInfo();
    console.log('Auth Current User Information', info);
    this.setState({ info: info.attributes });
  }

    // let data = this.props.data;
    // let candidate = this.props.data.candidate;
    // console.log('data', data);
    // const { info } = this.state;
    // const { given_name, family_name, email, address } = info;

    render(){
      console.log('INFO', this.state.info)
      return (
        <React.Fragment>
          <Query
          query={getCandidateByIdQuery}
          variables={{id:1}}
          >
            {({data, loading, error})=>{
              if (loading) return <p>Loading Candidate Account...</p>
              if (error) return <p>ERROR</p>
              console.log('DATA DOT CANDIDATE', data.candidate)

              return(
                <div>
          <div className="formContainer">
            <h3 className="welcomeAccount">Welcome {data.candidate.firstName}</h3>
            <img
              className="circleAccount"
              src="https://i.imgur.com/tEcU43K.png"
              alt="screeningImage"
            />{' '}
            {/* <button className="customeButton" type="submit">
              Change Photo
            </button>{' '} */}
            <br />
            <h4 className="accountList">Full Name</h4>
            <p className="accountListData">
              {data.candidate.firstName} {data.candidate.lastName}
            </p>
            <hr></hr>
            <h4 className="accountList">Address</h4>
            <p className="accountListData">{data.candidate.address}</p>
            <hr></hr>
            <h4 className="accountList">Email</h4>
            <p className="accountListData">{data.candidate.email}</p>
            <hr></hr>
            <h4 className="accountList">Phone</h4>
            <p className="accountListData">{data.candidate.phone}</p>
            <hr></hr>
            {/* <h4 className="accountList">Intro</h4>
            <p className="accountListData">{data.candidate.intro}</p>
            <hr></hr> */}
            {/* <button className="customeButton" type="submit">
              Edit Account
            </button> */}
          </div>
        </div>
              )
            }}
        </Query>
        </React.Fragment>
      );
    }
  }


export default graphql(getCandidateByIdQuery)(CandidateAccount);

// export default graphql(getCandidateByIdQuery, {
//   options: () => {
//     return {
//       variables: {
//         id: 1,
//       },
//     };
//   },
// })(CandidateAccount);
