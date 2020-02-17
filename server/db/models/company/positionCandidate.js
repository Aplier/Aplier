const Sequelize = require('sequelize');
const db = require('../../db');

const PositionCandidate = db.define('positionCandidate', {
  applied: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  accepted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = PositionCandidate;
