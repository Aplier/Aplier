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

  extend type Mutation {
    addEducation(name: String, degree: String, createdAt: String, updatedAt: String): Education
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
  },
  Mutation: {
    addEducation: (parent, {name, degree, createdAt, updatedAt}) => {
      const query = 'INSERT INTO "education" ("name", "degree", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4)';
      dbConn
      .none(query, [name, degree, createdAt, updatedAt])
      .then(data => console.log('Success!'))
      .catch(err => console.error(err))
    }
  }
};

module.exports = {
  education,
  educationResolvers
};
