const candidatePositions = `
  type CandidatePositions {
    id: ID
    applied: Boolean
    accepted: Boolean
    candidateId: ID
    companyPositionId: ID
  }

  extend type Query {
    appliedPositions(candidateId: Int!): [CandidatePositions]
  }
`;

const candidatePositionsResolvers = {
  Query: {
    appliedPositions: (parent, { candidateId }, { models }) => {
      try {
        return models.CandidatePositions.findAll({
          where: {
            candidateId,
            applied: true,
          },
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = {
  candidatePositions,
  candidatePositionsResolvers,
};
