const dbConn = require('../pg-promise');

const candidatePositions = `
  type CandidatePositions {
    id: ID
    applied: Boolean
    accepted: Boolean
    candidateId: ID
    companyPositionId: ID
  }
`;

module.exports = {
  candidatePositions
};
