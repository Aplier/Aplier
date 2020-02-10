import React from 'react';
import { graphql} from 'react-apollo';
import compose from 'lodash.flowright'
import { gql } from 'apollo-boost';



const getCompanyByIdQuery = gql`
query($id: ID!){
  company(id: $id) {
    id
    name
    location
    perks
    website
  }
}
`;

const getPositionsQuery = gql`
{
  positions {
    id
    title
    description
    salaryRange
    datePosted
    companyId
  }
}
`;

const getComp = graphql(getCompanyByIdQuery,{
    props:({data}) => ({
        loadingComp :data.loading,
        company:data.company,
        variables:{
            id:1
        }
    })
})

const getPos = graphql(getPositionsQuery,{
    props:({data}) => ({
        loadingPos :data.loading,
        positions:data.positions
    })
})

const Positions = ({loadingComp, loadingPos, company, positions}) => {
    if(loadingComp || loadingPos) return <p>loading</p>
    return positions.map(position => {
        console.log('WHAT IS', company)
        return (

          <div className="mapPos" key={position.id}>
            <h3>{position.title}</h3>
            <p>{position.description}</p>
            <p>{position.salaryRange}</p>
            <p>{position.datePosted}</p>
            {/* <p>{company}</p> */}
            {/* <React.Fragment> */}
            {/* <TestComp id={position.companyId}/> */}
            {/* </React.Fragment> */}
            <img className="thumbs" alt='down'src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"></img>
            <img onClick={()=>this.onClick(position.id)}className="thumbs" alt='up'src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"></img>
            </div>

        );
      })
}


export default compose(getComp, getPos)(Positions)
