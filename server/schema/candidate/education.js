const dbConn = require('../pg-promise');

const education = `
  type Education {
    id: ID
    name: String
    degree: String
    major: String
    minor: String
    gradDate: String
    candidateId: ID
  }

  extend type Query {
    education(candidateId: Int!): [Education!]!
  }
`;

const educationResolvers = {
  Query: {
    education: (parent, args) => {
      const query = `SELECT * FROM "education" WHERE education."candidateId"=${args.candidateId}`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => `This error is ${err}`);
    }
  }
};

module.exports = {
  education,
  educationResolvers
};
