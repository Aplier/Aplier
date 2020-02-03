const crypto = require('crypto')
const db = require('../db')
const Sequelize = require('sequelize')

const Candidate = db.define('candidate', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        // Making `.password` act like a func hides it when serializing to JSON.
        // This is a hack to get around Sequelize's lack of a "private" option.
        get() {
          return () => this.getDataValue('password')
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salt: {
        type: Sequelize.STRING,
        // Making `.salt` act like a function hides it when serializing to JSON.
        // This is a hack to get around Sequelize's lack of a "private" option.
        get() {
          return () => this.getDataValue('salt')
        }
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }

})

module.exports = Candidate

/**
 * instanceMethods
 */
Candidate.prototype.correctPassword = function(candidatePwd) {
  return Candidate.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
Candidate.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Candidate.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = candidate => {
  if (candidate.changed('password')) {
    candidate.salt = Candidate.generateSalt()
    candidate.password = Candidate.encryptPassword(candidate.password(), candidate.salt())
  }
}

Candidate.beforeCreate(setSaltAndPassword)
Candidate.beforeUpdate(setSaltAndPassword)
Candidate.beforeBulkCreate(candidate => {
    candidate.forEach(setSaltAndPassword)
})

