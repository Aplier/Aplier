const Candidate = require('./candidate/candidate')
const Education = require('./candidate/education')
const CurrentJob = require('./candidate/currentJob')
const PreviousJob = require('./candidate/previousJob')
const Skill = require('./candidate/skill')
const Company = require('./company/company')
const CompanyPosition = require('./company/companyPositions')
const CompanyUser = require('./company/companyUser')
const CandidateSkill = require('./candidate/candidateSkill')
const PositionsSkill = require('./company/positionsSkill')
// Associations

//1-1
// currentJob and Candidate? candidate should have 1 currentJob, current job can belong to 1 candidate?
Candidate.belongsTo(CurrentJob)
CurrentJob.hasOne(Candidate)


// 1-many
// edu and candidate? candidate can have multiple edu, edu can belong to only 1 candidate?
// previousJob and Candidate? candidate can have many previous job, previous job can onyl belong to one candidate?
Education.belongsTo(Candidate)
Candidate.hasMany(Education)

PreviousJob.belongsTo(Candidate)
Candidate.hasMany(PreviousJob)

CompanyPosition.belongsTo(Company)
Company.hasMany(CompanyPosition)

CompanyUser.belongsTo(Company)
Company.hasMany(CompanyUser)

CompanyPosition.belongsTo(CompanyUser)
CompanyUser.hasMany(CompanyPosition)

// many-many
// skill and candidate? candidate can have many skills, skills can belong to many candidate?

Candidate.belongsToMany(Skill, {through: CandidateSkill})
Skill.belongsToMany(Candidate, {through: CandidateSkill})
CompanyPosition.belongsToMany(Skill, {through: PositionsSkill})
Skill.belongsToMany(CompanyPosition, {through: PositionsSkill})


module.exports = {
    Candidate,
    Education,
    CurrentJob,
    PreviousJob,
    Skill,
    Company,
    CompanyPosition,
    CompanyUser,
    CandidateSkill,
    PositionsSkill
  }
