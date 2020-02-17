const currentJob = `
  type CurrentJob {
    id: ID
    companyName: String
    position: String
    startDate: String
  }

  extend type Query {
    currentJob(id: Int!): CurrentJob
  }

  extend type Mutation {
    editCurrentJob(id: Int!,
                   companyName: String,
                   position: String,
                   startDate: String): CurrentJob
  }
`;

const currentJobResolvers = {
  Query: {
    currentJob: (parent, { id }, { models }) => {
      try {
        return models.CurrentJob.findByPk(id);
      } catch (err) {
        console.error(err);
      }
    },
  },

  Mutation: {
    editCurrentJob: (parent, args, { models }) => {
      try {
        return models.CurrentJob.update(args, {
          where: {
            id: args.id,
          },
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = {
  currentJob,
  currentJobResolvers,
};
