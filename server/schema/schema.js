//Libraries
const { merge } = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const {
  candidate,
  candidateResolvers,
  currentJob,
  currentJobResolvers,
  previousJob,
  previousJobResolvers,
  education,
  educationResolvers,
  skill,
  skillResolvers,
} = require('./candidate');

const {
  company,
  companyResolvers,
  companyPositions,
  companyPositionsResolvers,
  companyUser,
  companyUserResolvers,
  candidatePositions,
  candidatePositionsResolvers,
  positionSkills,
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
  typeDefs: [
    Query,
    Mutation,
    candidate,
    currentJob,
    previousJob,
    education,
    skill,
    company,
    companyPositions,
    companyUser,
    candidatePositions,
    positionSkills,
  ],
  resolvers: merge(
    candidateResolvers,
    currentJobResolvers,
    previousJobResolvers,
    educationResolvers,
    skillResolvers,
    companyResolvers,
    companyPositionsResolvers,
    companyUserResolvers,
    candidatePositionsResolvers
  ),
});

module.exports = schema;
