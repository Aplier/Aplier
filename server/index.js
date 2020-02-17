//Libraries
const express = require('express');
const session = require('express-session');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const cors = require('cors');
const { Client } = require('pg');

const models = require('./db/models');
const db = require('./db/db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db });

const client = new Client({
  host: 'aplier.ccx1yvxrllrz.us-east-1.rds.amazonaws.com',
  user: 'Aplier',
  password: 'fsa-1911',
  database: 'Aplier',
});
client.connect();

//CORS FOR DEV
app.use(cors());

const createApp = () => {
  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { models },
    })
  );

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

const syncDb = () => db.sync();

async function bootApp() {
  await sessionStore.sync();
  await syncDb();
  await createApp();
  await startListening();
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}
