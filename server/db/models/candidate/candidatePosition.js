const Sequelize = require('sequelize');
const db = require('../../db');

const CandidatePosition = db.define('candidatePosition', {
  // applied: {
  //   type: Sequelize.BOOLEAN,
  //   defaultValue: false,
  // },
  // accepted: {
  //   type: Sequelize.BOOLEAN,
  //   defaultValue: false,
  // },
});

module.exports = CandidatePosition;
