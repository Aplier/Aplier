const dbConn = require('../pg-promise');

const skill = `
  type Skill {
    id: ID
    skill: String
    candidateId: ID
  }

  extend type Query {
    skill(candidateId: Int!): [Skill!]!
  }
`;

const skillResolvers = {
  Query: {
    skill: (parent, args) => {
      const query = `SELECT * FROM "candidateSkills" WHERE candidateSkills."candidateId"=${args.candidateId}`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  skill,
  skillResolvers
};
