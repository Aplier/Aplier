//PACKAGES
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { Client } = require('pg');

//IMPORTS
const schema = require('./schema/schema');
const models = require('./db/models');
const db = require('./db/db');
const sessionStore = new SequelizeStore({ db });

//CONNECT TO DB
const client = new Client({
  host: 'aplier.ccx1yvxrllrz.us-east-1.rds.amazonaws.com',
  user: 'Aplier',
  password: 'fsa-1911',
  database: 'Aplier',
});
client.connect();

//CORS FOR DEV
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { models },
  })
);

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
  await startListening();
}

bootApp();
