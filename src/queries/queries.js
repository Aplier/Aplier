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
    }
  }
`;

const getCompaniesQuery = gql`
{
  companies {
    id
    name
    location
    industry
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

const addCompanyMutation = gql`
  mutation AddCompany($name: String!, $location: String!, $industry: String!) {
    addCompany(name: $name, location: $location, industry: $industry) {
      id
      name
      location
      industry
    }
  }
`;

const addCandidateMutation = gql`
  mutation AddCandidate($firstName: String!, $lastName: String!, $address: String!, $email: String!, $password: String!) {
    addCandidate(firstName: $firstName,lastName: $lastName email: $email, password: $password) {
      id
      firstName
      lastName
      address
      email
      password
    }
}
`;

const addCompanyPositionMutation = gql`
  mutation AddCompanyPosition($title: String!, $description: String!, $salaryRange: String!) {
    addCompanyPosition(title: $title, description: $description, salaryRange: $salaryRange) {
      id
      title
      description
      salaryRange
    }
  }
`;

export {
  getCandidateQuery,
  getCompaniesQuery,
  getCompanyPositionsQuery,
  addCompanyMutation,
  addCandidateMutation,
  addCompanyPositionMutation
}
