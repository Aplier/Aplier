const crypto = require('crypto');
const db = require('../../db');
const Sequelize = require('sequelize');

const Company = db.define('company', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    // allowNull: false,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password');
    },
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt');
    },
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  industry: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  perks: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
  },
  imgURL: {
    type: Sequelize.TEXT,
    defaultValue: 'https://i.imgur.com/eZJho9O.png'
  },
  vidURL: {
    type: Sequelize.TEXT,
  },
});

module.exports = Company;

/**
 * instanceMethods
 */
Company.prototype.correctPassword = function(companyPwd) {
  return Company.encryptPassword(companyPwd, this.salt()) === this.password();
};

/**
 * classMethods
 */
Company.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

Company.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

/**
 * hooks
 */
const setSaltAndPassword = company => {
  if (company.changed('password')) {
    company.salt = Company.generateSalt();
    company.password = Company.encryptPassword(
      company.password(),
      company.salt()
    );
  }
};

Company.beforeCreate(setSaltAndPassword);
Company.beforeUpdate(setSaltAndPassword);
Company.beforeBulkCreate(company => {
  company.forEach(setSaltAndPassword);
});
