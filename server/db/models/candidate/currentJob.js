const db = require('../../db');
const Sequelize = require('sequelize');

const CurrentJob = db.define('currentjob', {
  companyName: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  startDate: {
    type: Sequelize.DATE,
  },
});

module.exports = CurrentJob;
