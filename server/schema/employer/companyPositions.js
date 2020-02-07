const dbConn = require('../pg-promise');

const companyPositions = `
  type CompanyPositions {
    id: ID
    title: String
    description: String
    salaryRange: String
    datePosted: String
    screeningQ1: String
    screeningQ2: String
    screeningQ3: String
    companyId: ID
    companyUserId: ID
  }

  extend type Query {
    position(id: Int!): CompanyPositions
    positions: [CompanyPositions!]!
  }
`;

const companyPositionsResolvers = {
  Query: {
    position: (parent, args) => {
      const query = `SELECT * FROM "companyPositions" WHERE id=${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => console.error(err));
    },
    positions: (parent, args) => {
      const query = `SELECT * FROM "companyPositions"`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  companyPositions,
  companyPositionsResolvers
};
