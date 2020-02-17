const db = require('../../db');
const Sequelize = require('sequelize');

const PreviousJob = db.define('previousjob', {
  companyName: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  },
});

module.exports = PreviousJob;
