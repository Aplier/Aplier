const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const cors = require('cors');
const models = require('./db/models');
const passport = require('passport');
const db = require('./db/db');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db });
const path = require('path');
const { Client } = require('pg');
const PORT = process.env.PORT || 4000

const client = new Client({
  host: 'aplier.ccx1yvxrllrz.us-east-1.rds.amazonaws.com',
  user: 'Aplier',
  password: 'fsa-1911',
  database: 'Aplier',
});
client.connect();




//CORS FOR DEV
// app.use(cors());

const createApp = () => {
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { models },
    })
  )
}
//   // body parsing middleware
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));

//   // compression middleware
//   // app.use(compression());

//   // session middleware with passport
//   app.use(
//     session({
//       secret: process.env.SESSION_SECRET || 'my best friend is Cody',
//       store: sessionStore,
//       resave: false,
//       saveUninitialized: false,
//     })
//   );
//   app.use(passport.initialize());
//   app.use(passport.session());

//   // auth and api routes
//   // app.use('/auth', require('./auth'));

//   // static file-serving middleware
//   app.use(express.static(path.join(__dirname, '..', 'public')));

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });


  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
// };



const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });

  // set up our socket control center
  // const io = socketio(server);
  // require('./socket')(io);
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
