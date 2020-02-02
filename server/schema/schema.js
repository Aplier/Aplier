const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const EmployerType = new GraphQLObjectType({
  name: 'Employer',
  fields: () => ({
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
  }),
});

const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: () => ({
    id: { type: GraphQLID },
    schoolName: { type: GraphQLString },
    degreeType: { type: GraphQLString },
    major: { type: GraphQLString },
    minor: { type: GraphQLString },
    gradDate: { type: GraphQLString },
    candidates: {
      type: new GraphQLList(CandidateType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/education/${parentValue.id}/candidates`)
          .then(res => res.data);
      },
    },
  }),
});

const currentPosType = new GraphQLObjectType({
  name: 'CurrentPosition',
  fields: () => ({
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    startDate: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});

const empHistoryType = new GraphQLObjectType({
  name: 'EmploymentHistory',
  fields: () => ({
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});

const CandidateType = new GraphQLObjectType({
  name: 'Candidate',
  fields: () => ({
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
        return axios
          .get(`http://localhost:3000/education/${parentValue.educationId}`)
          .then(res => res.data);
      },
    }, //to change
    currentPos: {
      type: currentPosType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/currentPos/${parentValue.currentPosId}`)
          .then(res => res.data);
      },
    }, //to change
    empHistory: {
      type: empHistoryType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/empHistory/${parentValue.empHistoryId}`)
          .then(res => res.data);
      },
    }, //to change
    industry: { type: GraphQLString },
    imgURL: { type: GraphQLString },
    vidURL: { type: GraphQLString },
  }),
});

//RootQuery - Lets us jump into graph of data through querying aka Entry point

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    candidate: {
      type: CandidateType,
      args: { id: { type: GraphQLID } },
      //Used to return actual piece of data
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/candidates/${args.id}`)
          .then(resp => resp.data);
      },
    },
    candidates: {
      type: new GraphQLList(CandidateType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/candidates/`)
          .then(resp => resp.data);
      },
    },
    education: {
      type: EducationType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/education/${args.id}`)
          .then(resp => resp.data);
      },
    },
    employmentHistory: {
      type: empHistoryType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/empHistory/${args.id}`);
      },
    },
    currentPosition: {
      type: currentPosType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/currentPos/${args.id}`);
      },
    },
  },
});

//ALL OF OUR MUTATIONS CREATE,UPDATE,DELETE
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //CREATE CANDIDATE
    addCandidate: {
      type: CandidateType,
      args: {
        // new GraphQLNonNull(GraphQLString) is validation for required
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        intro: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLString },
        industry: { type: GraphQLString },
        imgURL: { type: GraphQLString },
        vidURL: { type: GraphQLString },
      },
      resolve(parentValue, { firstName, lastName, email, password }) {
        return axios
          .post(`http://localhost:3000/candidates`, {
            firstName,
            lastName,
            email,
            password,
          })
          .then(res => res.data);
      },
    },
    //DELETE CANDIDATE
    deleteCandidate: {
      type: CandidateType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/candidates/${id}`)
          .then(res => res.data);
      },
    },
    //UPDATE CANDIDATE INFORMATION
    editCandidate: {
      type: CandidateType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        intro: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        address: { type: GraphQLString },
        industry: { type: GraphQLString },
        imgURL: { type: GraphQLString },
        vidURL: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .patch(`http://localhost:3000/candidates/${args.id}`, args)
          .then(res => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
