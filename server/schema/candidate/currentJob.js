const dbConn = require('../pg-promise');

const currentJob = `
  type CurrentJob {
    id: ID
    companyName: String
    position: String
    startDate: String
    candidateId: ID
  }

  extend type Query {
    currentJob(candidateId: Int!): CurrentJob
  }
`;

const currentJobResolvers = {
  Query: {
    currentJob: (parent, args) => {
      const query = `SELECT * FROM "currentjobs" WHERE currentjobs."candidateId"=${args.candidateId}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  currentJob,
  currentJobResolvers
};
