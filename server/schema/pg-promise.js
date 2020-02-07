const pgp = require('pg-promise')();
const connection = 'postgresql://localhost:5432/aplier';
// const connection = {
//   host: 'aplierdb.czniy2ofqmqo.us-east-2.rds.amazonaws.com',
//   port: 5432,
//   database: 'aplier',
//   user: 'aplier',
//   password: 'fsa-1911',
// };

// Creating a new database instance from the connection details:
const dbConn = pgp(connection);

module.exports = dbConn;
