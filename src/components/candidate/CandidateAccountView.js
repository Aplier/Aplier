import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';
import { getCandidateByIdQuery } from '../../queries/queries';
import { Auth } from 'aws-amplify';
import CandidateAccountDynamic from './CandidateAccountDynamic'

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
      return(
        <div>
        {this.state.info.email ?
          <CandidateAccountDynamic email={this.state.info.email}/>
          :
          <div>MEHHH</div>
        }
        </div>
        
      )
    }
  }


export default (CandidateAccount);


