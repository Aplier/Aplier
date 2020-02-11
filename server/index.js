const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
const cors = require('cors');
const models = require('./db/models');

//CORS FOR DEV
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { models }
  })
);

const PORT = 4000;

app.listen(4000, () => {
  console.log(`Listening on port ${PORT}`);
});
