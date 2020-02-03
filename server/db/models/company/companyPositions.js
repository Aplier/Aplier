const Sequelize = require('sequelize');
const db = require('../../db');

const CompanyPositions = db.define('companyPositions', {
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
  skillsRequired: {
    type: Sequelize.STRING
  },
  datePosted: {
    type: Sequelize.DATE
  },
  ScreeningQ1: {
    type: Sequelize.TEXT
  },
  ScreeningQ2: {
    type: Sequelize.TEXT
  },
  ScreeningQ3: {
    type: Sequelize.TEXT
  },
})

module.export = CompanyPositions
