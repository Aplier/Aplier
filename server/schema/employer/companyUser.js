const dbConn = require('../pg-promise');

const companyUser = `
  type CompanyUser {
    id: ID
    email: String
    password: String
    isAdmin: Boolean
    companyId: ID
  }

  extend type Query {
    user(id: Int!): User
    users: [User!]!
  }
`;

const companyUserResolvers = {
  Query: {
    user: (parent, args) => {
      const query = `SELECT * FROM "companyUsers" WHERE id=${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => console.error(err));
    },
    users: (parent, args) => {
      const query = `SELECT * FROM "companyUsers"`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  companyUser,
  companyUserResolvers
};
