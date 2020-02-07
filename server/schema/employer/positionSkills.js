const dbConn = require('../pg-promise');

const positionSkills = `
  type PositionSkills {
    companyPositionId: ID
    skillId: ID
  }
`;

module.exports = {
  positionSkills
};
