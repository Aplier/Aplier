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
CompanyUser.prototype.correctPassword = function(CompanyUserPwd) {
  return CompanyUser.encryptPassword(CompanyUserPwd, this.salt()) === this.password()
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
const setSaltAndPassword = CompanyUser => {
  if (CompanyUser.changed('password')) {
    CompanyUser.salt = CompanyUser.generateSalt()
    CompanyUser.password = CompanyUser.encryptPassword(CompanyUser.password(), CompanyUser.salt())
  }
}

CompanyUser.beforeCreate(setSaltAndPassword)
CompanyUser.beforeUpdate(setSaltAndPassword)
CompanyUser.beforeBulkCreate(CompanyUser => {
    CompanyUser.forEach(setSaltAndPassword)
})
