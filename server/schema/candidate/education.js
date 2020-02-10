const education = `
  type Education {
    id: ID
    name: String
    degree: String
    major: String
    minor: String
    gradDate: String
    candidateId: ID
    candidate: Candidate
  }

  extend type Query {
    education(candidateId: Int!): [Education!]!
  }
`;

const educationResolvers = {
  Query: {
    education: (parent, args, { models }) => {
      try{
        return models.Education.findAll({
          where: args,
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
  education,
  educationResolvers
};
