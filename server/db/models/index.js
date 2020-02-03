const Candidate = require('./candidate')
const Education = require('./education')
const CurrentJob = require('./currentJob')
const PreviousJob = require('./previousJob')
const Skill = require('./skill')
const Company = require('./company/company')
const CompanyPositions = require('./company/companyPositions')
const CompanyUser = require('./company/companyUser')
// Associations

//1-1
// currentJob and Candidate? candidate should have 1 currentJob, current job can belong to 1 candidate?



// 1-many
// edu and candidate? candidate can have multiple edu, edu can belong to only 1 candidate?
// previousJob and Candidate? candidate can have many previous job, previous job can onyl belong to one candidate?



// many-many
// skill and candidate? candidate can have many skills, skills can belong to many candidate?



module.exports = {
    Candidate,
    Education,
    CurrentJob,
    PreviousJob,
    Skill,
    Company,
    CompanyPositions,
    CompanyUser
  }
