const { company, companyResolvers } = require('./company');
const { companyPositions, companyPositionsResolvers } = require('./companyPositions');
const { companyUser, companyUserResolvers } = require('./companyUser');
const { candidatePositions } = require('./candidatePositions');
const { positionSkills } = require('./positionSkills');

module.exports = {
  company, companyResolvers,
  companyPositions, companyPositionsResolvers,
  companyUser, companyUserResolvers,
  candidatePositions,
  positionSkills
};
