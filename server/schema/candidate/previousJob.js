const previousJob = `
  type PreviousJob {
    id: ID
    companyName: String
    position: String
    startDate: String
    endDate: String
    candidateId: ID
    candidate: Candidate
  }

  extend type Query {
    previousJob(candidateId: Int!): [PreviousJob!]!
  }

  extend type Mutation {
    addPreviousJob(candidateId: Int!): PreviousJob
    deletePreviousJob(id: Int,
                      companyName: String,
                      position: String,
                      startDate: String,
                      endDate: String,
                      candidateId: Int!): PreviousJob
    editPreviousJob(id: Int!,
                    companyName: String,
                    position: String,
                    startDate: String,
                    endDate: String,
                    candidateId: Int): PreviousJob
  }
`;

const previousJobResolvers = {
  Query: {
    previousJob: (parent, args, { models }) => {
      try{
        return models.PreviousJob.findAll({
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
    addPreviousJob: (parent, args, { models }) => {
      try{
        return models.PreviousJob.create(args);
      }catch(err){
        console.error(err);
      }
    },

    deletePreviousJob: (parent, args, { models }) => {
      try{
        models.PreviousJob.destroy({
          where: args
        });
      }catch(err){
        console.error(err);
      }
    },

    editPreviousJob: (parent, args, { models }) => {
      try{
        return models.PreviousJob.update(args, {
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
  previousJob,
  previousJobResolvers
};
