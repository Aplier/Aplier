const dbConn = require('../pg-promise');

const company = `
  type Company {
    id: ID
    name: String!
    location: String!
    industry: String!
    perks: String
    website: String
    imgURL: String
    vidURL: String
  }

  extend type Query {
    company(id: Int!): Company
    companies: [Company!]!
  }
`;

const companyResolvers = {
  Query: {
    company: (parent, args) => {
      const query = `SELECT * FROM "companies" WHERE id=${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => console.error(err));
    },
    companies: (parent, args) => {
      const query = `SELECT * FROM "companies"`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  company,
  companyResolvers
};
