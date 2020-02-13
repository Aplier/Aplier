const pgp = require('pg-promise')();
// const connection = 'postgresql://localhost:5432/aplier';

const connection = {
  host: 'aplier.ccx1yvxrllrz.us-east-1.rds.amazonaws.com',
  port: 5432,
  user: 'Aplier',
  password: 'fsa-1911',
  database: 'Aplier',
};

// Creating a new database instance from the connection details:
const dbConn = pgp(connection);

module.exports = dbConn;
