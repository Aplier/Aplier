const db = require('../../db');
const Sequelize = require('sequelize');

const Education = db.define('education', {
  name: {
    type: Sequelize.STRING,
  },
  degree: {
    type: Sequelize.STRING,
  },
  major: {
    type: Sequelize.STRING,
  },
  minor: {
    type: Sequelize.STRING,
  },
  gradDate: {
    type: Sequelize.DATE,
  },
});

module.exports = Education;
