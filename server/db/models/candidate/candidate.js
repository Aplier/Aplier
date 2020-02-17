//Libraries
const crypto = require('crypto');
const db = require('../../db');
const Sequelize = require('sequelize');

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
    // allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return () => this.getDataValue('password');
    },
  },
  phone: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt');
    },
  },
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  intro: {
    type: Sequelize.STRING,
  },
  imgURL: {
    type: Sequelize.TEXT,
  },
  videoURL: {
    type: Sequelize.TEXT,
  },
  cognitoId: {
    type: Sequelize.STRING,
  },
});

module.exports = Candidate;

//Instance Methods
Candidate.prototype.correctPassword = function(candidatePwd) {
  return (
    Candidate.encryptPassword(candidatePwd, this.salt()) === this.password()
  );
};

//Class Methods
Candidate.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

Candidate.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

//Hooks
const setSaltAndPassword = candidate => {
  if (candidate.changed('password')) {
    candidate.salt = Candidate.generateSalt();
    candidate.password = Candidate.encryptPassword(
      candidate.password(),
      candidate.salt()
    );
  }
};

Candidate.beforeCreate(setSaltAndPassword);
Candidate.beforeUpdate(setSaltAndPassword);
Candidate.beforeBulkCreate(candidate => {
  candidate.forEach(setSaltAndPassword);
});
