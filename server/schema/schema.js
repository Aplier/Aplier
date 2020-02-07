const { merge } = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const {
  candidate, candidateResolvers,
  currentJob, currentJobResolvers,
  previousJob, previousJobResolvers,
  education, educationResolvers,
  skill
} = require('./candidate');

const {
  company, companyResolvers,
  companyPositions,
  companyUser, companyUserResolvers,
  candidatePositions,
  positionSkills
} = require('./employer');

const Query = `
  type Query {
    _empty: String
  }
`;

const Mutation = `
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, candidate, currentJob, previousJob, education, skill],
  resolvers: merge(candidateResolvers, currentJobResolvers, previousJobResolvers,
                   educationResolvers)
});

module.exports = schema;
