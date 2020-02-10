const dbConn = require('../pg-promise');

const candidatePositions = `
  type CandidatePositions {
    id: ID
    applied: Boolean
    accepted: Boolean
    candidateId: ID
    companyPositionId: ID
  }

  extend type Query {
    positionApplied(candidateId: Int!): [CandidatePositions]
  }
`;

const candidatePositionsResolvers = {
  Query: {
    positionApplied: (parent, args, { models }) => {
      try{
        return models.CandidatePositions.findAll({
          where: args
        });
      }catch(err){
        console.error(err);
      }
    }
  }
}

module.exports = {
  candidatePositions,
  candidatePositionsResolvers
};
