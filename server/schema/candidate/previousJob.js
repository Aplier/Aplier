const dbConn = require('../pg-promise');

const previousJob = `
  type PreviousJob {
    id: ID
    companyName: String
    position: String
    startDate: String
    endDate: String
    candidateId: ID
  }

  extend type Query {
    previousJob(candidateId: Int!): [PreviousJob!]!
  }
`;

const previousJobResolvers = {
  Query: {
    previousJob: (parent, args) => {
      const query = `SELECT * FROM "previousjobs" WHERE previousjobs."candidateId"=${args.candidateId}`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  previousJob,
  previousJobResolvers
};
