const Sequelize = require('sequelize');
const db = require('../../db');

const Company = db.define('company', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  industry: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  perks: {
    type: Sequelize.STRING
  },
  website: {
    type: Sequelize.STRING
  },
  imgURL: {
    type: Sequelize.TEXT
  },
  vidURL: {
    type: Sequelize.TEXT
  }
})

module.exports = Company
