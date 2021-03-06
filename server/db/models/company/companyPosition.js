const Sequelize = require('sequelize');
const db = require('../../db');

const CompanyPosition = db.define('companyPosition', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  salaryRange: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  datePosted: {
    type: Sequelize.DATE
  },
  screeningQ1: {
    type: Sequelize.TEXT
  },
  screeningQ2: {
    type: Sequelize.TEXT
  },
  screeningQ3: {
    type: Sequelize.TEXT
  },
})

module.exports = CompanyPosition
