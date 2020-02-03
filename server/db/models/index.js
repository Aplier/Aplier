const Candidate = require('./candidate')
const Education = require('./education')
const CurrentJob = require('./currentJob')
const PreviousJob = require('./previousJob')
const Skill = require('./skill')
const CandidateSkill = require('./candidateSkill')

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



// many-many
// skill and candidate? candidate can have many skills, skills can belong to many candidate?

Candidate.belongsToMany(Skill, {through: CandidateSkill})
Skill.belongsToMany(Candidate, {through: CandidateSkill})



module.exports = {
    Candidate, 
    Education,
    CurrentJob,
    PreviousJob,
    Skill,
    CandidateSkill
  }