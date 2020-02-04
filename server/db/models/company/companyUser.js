const crypto = require('crypto')
const Sequelize = require('sequelize');
const db = require('../../db');

const CompanyUser = db.define('companyUser', {
  // Company ID
  // Position ID
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,

    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,

    get() {
      return () => this.getDataValue('salt')
    }
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
})

module.exports = CompanyUser

/**
 * instanceMethods
 */
CompanyUser.prototype.correctPassword = function(companyUserPwd) {
  return CompanyUser.encryptPassword(companyUserPwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
CompanyUser.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

CompanyUser.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = companyUser => {
  if (companyUser.changed('password')) {
    companyUser.salt = CompanyUser.generateSalt()
    companyUser.password = CompanyUser.encryptPassword(companyUser.password(), companyUser.salt())
  }
}

CompanyUser.beforeCreate(setSaltAndPassword)
CompanyUser.beforeUpdate(setSaltAndPassword)
CompanyUser.beforeBulkCreate(companyUser => {
    companyUser.forEach(setSaltAndPassword)
})
