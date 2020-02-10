const router = require('express').Router();
const {
  Candidate,
  Education,
  CurrentJob,
  PreviousJob,
  Skill,
  Company,
  CompanyPosition,
  CompanyUser,
  CandidateSkill,
  PositionsSkill,
  CandidatePositions
} = require('./index');

router.get('/', async (req, res, next) => {
  try{
    const x = await Candidate.findByPk(1,{
      include: [{
        model: CompanyPosition
      },{
        model: Skill
      }],
      where: {
        candidateId: 1
      }
    });
    res.send(x);
  }catch(err){
    next(err);
  }
})

module.exports = router
