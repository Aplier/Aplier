const skill = `
  type Skill {
    id: ID
    skill: String
    candidates: [Candidate]
    companyPositions: [CompanyPositions]
  }

  extend type Query {
    skills(id: Int, skill: String): Skill
  }

  extend type Mutation {
    addSkill(skill: String): Skill
    deleteSkill(id: Int, skill: String): Skill
  }
`;

const skillResolvers = {
  Query: {
    skills: (parent, args, { models }) => {
      try {
        return models.Skill.findOne({
          where: args,
          include: [
            {
              model: models.Candidate,
            },
            {
              model: models.CompanyPosition,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    },
  },

  Mutation: {
    addSkill: (parent, args, { models }) => {
      try {
        return models.Skill.create(args);
      } catch (err) {
        console.error(err);
      }
    },

    deleteSkill: (parent, args, { models }) => {
      try {
        models.Skill.destroy({
          where: args,
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = {
  skill,
  skillResolvers,
};
