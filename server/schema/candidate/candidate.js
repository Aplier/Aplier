const dbConn = require('../pg-promise');

const candidate = `
  type Candidate {
    id: ID
    firstName: String!
    lastName: String!
    address: String
    email: String!
    password: String!
    phone: String
    intro: String
    imgURL: String
    vidURL: String
  }

  extend type Query {
    candidate(id: Int!): Candidate
    candidates: [Candidate!]!
  }

`;

const candidateResolvers = {
  Query: {
    candidate: (parent, args) => {
      const query = `SELECT * FROM "candidates" WHERE id=${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => `This error is ${err}`);
    },
    candidates: (parent, args) => {
      const query = 'SELECT * FROM "candidates"';
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => `This error is ${err}`);
    }
  },
  // Mutation: {
  //   addCandidate: (parent, args) => {
  //     const query = `INSERT INTO "candidates" ("firstName", "lastName", "email", "password") VALUES ('${args.firstName}', '${args.lastName}', '${args.email}', '${args.password}')`;
  //     return dbConn
  //     .none(query)
  //     .then(data => data)
  //     .catch(err => `This error is ${err}`);
  //   }
  // }
};

module.exports = {
  candidate,
  candidateResolvers
};
