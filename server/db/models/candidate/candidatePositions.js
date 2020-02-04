const Sequelize = require('sequelize')
const db = require('../../db')

const CandidatePositions = db.define('candidatePositions', {
  applied: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  accepted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
})

module.exports = CandidatePositions
