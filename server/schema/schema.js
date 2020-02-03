const graphql = require('graphql');
const axios = require('axios');
const connectionString = 'postgresql://tinafunmacpro@:5432/aplier'
// const connectionString = 'postgresql://aplier@aplierdb.czniy2ofqmqo.us-east-2.rds.amazonaws.com:5432/aplier'
const pgp = require('pg-promise')();
const db = {}
db.conn = pgp(connectionString);

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const EmployerType = new GraphQLObjectType({
  name: 'Employer',
  fields: {
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    location: { type: GraphQLString },
    industry: { type: GraphQLString },
    perks: { type: GraphQLString },
    website: { type: GraphQLString },
    imgURL: { type: GraphQLString },
    vidURL: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    positions: { type: GraphQLString },
  },
});

const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: {
    id: { type: GraphQLID },
    schoolName: { type: GraphQLString },
    degreeType: { type: GraphQLString },
    major: { type: GraphQLString },
    minor: { type: GraphQLString },
    gradDate: { type: GraphQLString },
  },
});

const currentPosType = new GraphQLObjectType({
  name: 'CurrentPosition',
  fields: {
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    startDate: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

const empHistoryType = new GraphQLObjectType({
  name: 'EmploymentHistory',
  fields: {
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

const CandidateType = new GraphQLObjectType({
  name: 'Candidate',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    intro: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    address: { type: GraphQLString },
    education: {
      type: EducationType,
      resolve(parentValue, args) {
        axios
          .get(`http://localhost:4000/education/${parentValue.educationId}`)
          .then(res => res.data);
      },
    }, //to change
    currentPos: {
      type: currentPosType,
    }, //to change
    empHistory: {
      type: empHistoryType,
    }, //to change
    industry: { type: GraphQLString },
    imgURL: { type: GraphQLString },
    vidURL: { type: GraphQLString },
  },
});

//RootQuery - Lets us jump into graph of data through querying aka Entry point

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    candidate: {
      type: CandidateType,
      args: { id: { type: GraphQLID } },
      //Used to return actual piece of data
      // resolve(parentValue, args) {
      //   return axios
      //     .get(`http://localhost:4000/candidates/${args.id}`)
      //     .then(resp => resp.data);
      // },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "candidates" WHERE id=${args.id}`;
        return db.conn.one(query)
           .then(data => {
              return data;
           })
           .catch(err => {
               return 'The error is' + err;
           });
     }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
