import { gql } from 'apollo-boost';

const getCandidateQuery = gql`
  {
    candidates {
      id
      imgURL
      firstName
      lastName
      intro
      address
      email
      phone
    }
  }
`;

const getCompanyPositionsQuery = gql`
{
  companyPositions {
    id
    title
    description
    salarayRange
    datePosted
  }
}
`;

export {getCandidateQuery, getCompanyPositionsQuery}
