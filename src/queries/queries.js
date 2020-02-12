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
      currentjob {
        id
        companyName
        position
      }
    }
  }
`;
const getCandidateByIdQuery = gql`
  query($id: Int!) {
    candidate(id: $id) {
      id
      firstName
      lastName
      address
      email
      imgURL
      phone
      intro
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
      perks
      website
      imgURL
    }
  }
`;

const getCompanyByIdQuery = gql`
  query($id: Int!) {
    company(id: $id) {
      id
      name
      location
      perks
      website
      imgURL
    }
  }
`;

const getCurrentJobByIdQuery = gql`
  query($candidateId: Int!) {
    currentJob(candidateId: $candidateId) {
      id
      companyName
      position
      startDate
    }
  }
`;

const getEduById = gql`
  query($candidateId: Int!) {
    education(candidateId: $candidateId) {
      name
      major
    }
  }
`;

const getPositionsQuery = gql`
  {
    companyPositions {
      id
      title
      description
      salaryRange
      datePosted
      company {
        imgURL
        name
        location
        website
      }
    }
  }
`;

const getScreeningByPositionByIdQuery = gql`
  query($id: Int!) {
    companyPosition(id: $id) {
      id
      title
      screeningQ1
      screeningQ2
      screeningQ3
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
  mutation AddCandidate(
    $firstName: String!
    $lastName: String!
    $address: String!
    $email: String!
    $password: String!
  ) # $phone: String!
  # $intro: String!
  # $cognitoId: String!
  # $imgURL: String!
  {
    addCandidate(
      firstName: $firstName
      lastName: $lastName
      address: $address
      email: $email
      password: $password
    ) # phone: $phone
    # intro: $intro
    # cognitoId: $cognitoId
    # imgURL: $imgURL
    {
      id
      firstName
      lastName
      email
      password
      # cognitoId
      # imgURL
    }
  }
`;

const addCompanyPositionMutation = gql`
  mutation addCompanyPosition(
    $title: String!
    $description: String!
    $salaryRange: String!
    $companyId: Int!
  ) {
    addCompanyPosition(
      title: $title
      description: $description
      salaryRange: $salaryRange
      companyId: $companyId
    ) {
      id
      title
      description
      salaryRange
      companyId
    }
  }
`;

const getMatchByPositionQuery = gql`
  query($id: Int!) {
    companyPosition(id: $id) {
      title
      candidates {
        id
        firstName
        lastName
      }
    }
  }
`;

const getMatchByCandidateQuery = gql`
  query($id: Int!) {
    candidate(id: $id) {
      companyPositions {
        id
        title
      }
    }
  }
`;

export {
  getCandidateQuery,
  getCompaniesQuery,
  getPositionsQuery,
  addCompanyMutation,
  addCandidateMutation,
  addCompanyPositionMutation,
  getCompanyByIdQuery,
  getCandidateByIdQuery,
  getCurrentJobByIdQuery,
  getMatchByPositionQuery,
  getScreeningByPositionByIdQuery,
  getMatchByCandidateQuery,
  getEduById,
};
