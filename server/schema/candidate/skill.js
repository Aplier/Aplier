const skill = `
  type Skill {
    id: ID
    skill: String
    candidates: [Candidate]
  }

  extend type Query {
    skills(id: Int!): Skill
  }
`;

const skillResolvers = {
  Query: {
    skills: (parent, { id }, { models }) => {
      try{
        return models.Skill.findByPk(id, {
          include: {
            model: models.Candidate
          }
        });
      }catch(err){
        console.error(err);
      }
    }
  }
};

module.exports = {
  skill,
  skillResolvers
};
