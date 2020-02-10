const currentJob = `
  type CurrentJob {
    id: ID
    companyName: String
    position: String
    startDate: String
    candidateId: ID
    candidate: Candidate
  }

  extend type Query {
    currentJob(candidateId: Int!): CurrentJob
  }
`;

const currentJobResolvers = {
  Query: {
    currentJob: (parent, args, { models }) => {
      try{
        return models.CurrentJob.findOne({
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
  currentJob,
  currentJobResolvers
};
