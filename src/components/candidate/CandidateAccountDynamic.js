import React, { Component } from 'react';
import { graphql, Query } from 'react-apollo';
import { getCandidateByIdQuery } from '../../queries/queries';

class CandidateAccountDynamic extends Component {
    render(){
        console.log('MY PROPS',this.props)
      return (
          <Query
          query={getCandidateByIdQuery}
          variables={{email:this.props.email}}
          >
            {({data, loading, error})=>{
              if (loading) return <p>Loading Candidate Account...</p>
              if (error) return <p>ERROR</p>
              if (data) 
                return(
                  <div>
                  {/* {refetch} */}
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
      )
    }
  }


export default graphql(getCandidateByIdQuery)(CandidateAccountDynamic);

