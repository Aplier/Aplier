import { gql } from 'apollo-boost';

export default gql`
  {
    company(id:'') {
      name
      industry
      location
    }
  }
`;
