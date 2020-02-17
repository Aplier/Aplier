//Schemas
const { candidate, candidateResolvers } = require('./candidate');
const { currentJob, currentJobResolvers } = require('./currentJob');
const { previousJob, previousJobResolvers } = require('./previousJob');
const { education, educationResolvers } = require('./education');
const { skill, skillResolvers } = require('./skill');

module.exports = {
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
};
