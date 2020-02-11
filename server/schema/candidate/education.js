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

  extend type Mutation {
    addEducation(id: Int,
                 name: String,
                 degree: String,
                 major: String,
                 minor: String,
                 gradDate: String,
                 candidateId: Int!): Education
    deleteEducation(id: Int,
                    name: String,
                    degree: String,
                    major: String,
                    minor: String,
                    gradDate: String,
                    candidateId: Int!): Education
    editEducation(id: Int!,
                  name: String,
                  degree: String,
                  major: String,
                  minor: String,
                  gradDate: String,
                  candidateId: Int): Education
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
  },

  Mutation: {
    addEducation: (parent, args, { models }) => {
      try{
        return models.Education.create(args);
      }catch(err){
        console.error(err);
      }
    },

    deleteEducation: (parent, args, { models }) => {
      try{
        models.Education.destroy({
          where: args
        });
      }catch(err){
        console.error(err);
      }
    },

    editEducation: (parent, args, { models }) => {
      try{
        return models.Education.update(args, {
          where: {
            id: args.id
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
