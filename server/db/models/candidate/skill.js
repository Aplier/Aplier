const db = require('../../db');
const Sequelize = require('sequelize');

const Skill = db.define('skill', {
  skill: {
    type: Sequelize.STRING,
  },
});

module.exports = Skill;
