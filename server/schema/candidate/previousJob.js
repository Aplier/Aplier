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
  }
};

module.exports = {
  previousJob,
  previousJobResolvers
};
