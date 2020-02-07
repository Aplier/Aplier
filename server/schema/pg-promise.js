const pgp = require('pg-promise')();
const connection = 'postgresql://localhost:5432/aplier';

// Creating a new database instance from the connection details:
const dbConn = pgp(connection);

module.exports = dbConn;
