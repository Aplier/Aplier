const pgp = require('pg-promise')();
// const connection = 'postgresql://localhost:5432/aplier';
const connection = {
  host: 'aplier.cmd7ws8o8flr.us-east-2.rds-preview.amazonaws.com',
  port: 5432,
  database: 'aplier',
  user: 'Aplier',
  password: 'FSApikachu',
};

// Creating a new database instance from the connection details:
const dbConn = pgp(connection);

module.exports = dbConn;
