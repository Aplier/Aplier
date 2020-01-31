const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    //Allows us to make GraphQL queries against our development server
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(4000, () => {
  console.log(`Listening on port ${PORT}`);
});
