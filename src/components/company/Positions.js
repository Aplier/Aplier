//Libraries
import React from './node_modules/react';
import { graphql } from './node_modules/react-apollo';
import compose from './node_modules/lodash.flowright';
import { gql } from './node_modules/apollo-boost';

// const getCompaniesQuery = gql`
// {
//   companies {
//     id
//     name
//     location
//     industry
//   }
// }
// `

// const getCompanyByIdQuery = gql`
// query($id: Int!){
//   company(id: $id) {
//     id
//     name
//     location
//     perks
//     website
//   }
// }
// `;

const getPositionsQuery = gql`
  {
    companyPositions {
      id
      title
      description
      salaryRange
      datePosted
      companyId
    }
  }
`;

// const getComp = graphql(getCompanyByIdQuery,{
//     props:({data}) => ({
//         loadingComp :data.loading,
//         company:data.company,
//     }),

//     options:(compId) =>{
//         return {
//             variables:{
//                 id: compId
//             }
//         }
//     }
// })

// const getComp = graphql(getCompaniesQuery,{
//     props:({data}) => ({
//         loadingComp :data.loading,
//         companies:data.companies,
//     })
// })

const getPos = graphql(getPositionsQuery, {
  props: ({ data }) => ({
    loadingPos: data.loading,
    positions: data.positions,
  }),
});

const Positions = ({ loadingPos, positions }) => {
  if (loadingPos) return <p>loading</p>;
  return positions.map(position => {
    return (
      <div className="mapPos" key={position.id}>
        <h3>{position.title}</h3>
        <p>{position.description}</p>
        <p>{position.salaryRange}</p>
        <p>{position.datePosted}</p>
        {/* <p>{companies[position.companyId].name}</p>
            <p>{companies[position.companyId].location}</p>
            <p>{companies[position.companyId].perks}</p>
            <p>{companies[position.companyId].website}</p> */}
        {/* <p>{company}</p> */}
        {/* <React.Fragment> */}
        {/* <TestComp id={position.companyId}/> */}
        {/* </React.Fragment> */}
        <img
          className="thumbs"
          alt="down"
          src="https://img.icons8.com/ultraviolet/40/000000/poor-quality.png"
        ></img>
        <img
          onClick={() => this.onClick(position.id)}
          className="thumbs"
          alt="up"
          src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"
        ></img>
      </div>
    );
  });
};

export default compose(getPos)(Positions);
