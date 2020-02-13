const Sequelize = require('sequelize');
const pkg = require('../../package.json');


// const databaseName =
//   pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const db = new Sequelize(
  process.env.RDS_CONNECTION_URL || `postgres://Aplier:FSApikachu@aplier.cmd7ws8o8flr.us-east-2.rds-preview.amazonaws.com/aplier`,

  // process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
  }
);
module.exports = db;

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close());
}
