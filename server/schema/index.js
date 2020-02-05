const graphql = require('graphql');
const axios = require('axios');
// const connectionString = 'postgresql://tinafunmacpro@:5432/aplier';
const connectionString = 'postgresql://DoZa@:5432/aplier';

// const connectionString =
// 'postgresql://aplier@aplierdb.czniy2ofqmqo.us-east-2.rds.amazonaws.com:5432/aplier';
const pgp = require('pg-promise')();
const db = {};
db.conn = pgp(connectionString);

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQL,
} = graphql;

const CompanyPositionType = new GraphQLObjectType({
  name: 'Position',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    salaryRange: { type: GraphQLString },
    skillsRequired: { type: GraphQLString },
    datePosted: { type: GraphQLString },
    screeningQuestion1: { type: GraphQLString },
    screeningQuestion2: { type: GraphQLString },
    screeningQuestion3: { type: GraphQLString },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/positions/${parentValue.id}/companies`)
          .then(resp => resp.data);
      },
    },
  }),
});

const CompanyUserType = new GraphQLObjectType({
  name: 'CompanyUser',
  fields: () => ({
    id: { type: GraphQLID },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${parentValue.id}/companies`)
          .then(resp => resp.data);
      },
    },
    positions: {
      type: new GraphQLList(CompanyPositionType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${parentValue.id}/positions`)
          .then(resp => resp.data);
      },
    },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
  }),
});

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    industry: { type: GraphQLString },
    perks: { type: GraphQLString },
    website: { type: GraphQLString },
    imgURL: { type: GraphQLString },
    vidURL: { type: GraphQLString },
    users: {
      type: new GraphQLList(CompanyUserType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then(resp => resp.data);
      },
    },
    positions: {
      type: new GraphQLList(CompanyPositionType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.id}/positions`)
          .then(resp => resp.data);
      },
    },
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
          .then(resp => resp.data);
      },
    },
  }),
});

const CurrentPosType = new GraphQLObjectType({
  name: 'CurrentPosition',
  fields: () => ({
    id: { type: GraphQLID },
    company: { type: GraphQLString },
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
          .then(resp => resp.data);
      },
    },
    currentPos: {
      type: CurrentPosType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/currentPos/${parentValue.currentPosId}`)
          .then(resp => resp.data);
      },
    },
    empHistory: {
      type: empHistoryType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/empHistory/${parentValue.empHistoryId}`)
          .then(resp => resp.data);
      },
    },
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
      resolve(parentValue, args) {
        const query = `SELECT * FROM "candidates" WHERE id=${args.id}`;
        return db.conn
          .one(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
     },
    candidates: {
      type: GraphQLList(CandidateType),
      resolve(parentValue, args) {
        const query = 'SELECT * FROM "candidates"'
        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      }
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
        return axios
          .get(`http://localhost:3000/empHistory/${args.id}`)
          .then(resp => resp.data);
      },
    },
    currentPosition: {
      type: CurrentPosType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/currentPos/${args.id}`)
          .then(resp => resp.data);
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${args.id}`)
          .then(resp => resp.data);
      },
    },
    companies: {
      type: GraphQLList(CompanyType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies`)
          .then(resp => resp.data);
      },
    },
    user: {
      type: CompanyUserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data);
      },
    },
    users: {
      type: GraphQLList(CompanyUserType),
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/users').then(resp => resp.data);
      },
    },
    position: {
      type: CompanyPositionType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/positions/${args.id}`)
          .then(resp => resp.data);
      },
    },
    positions: {
      type: GraphQLList(CompanyPositionType),
      resolve(parentValue, args) {
        return axios
          .get('http://localhost:3000/positions')
          .then(resp => resp.data);
      },
    },
  }
});

//ALL OF OUR MUTATIONS CREATE,UPDATE,DELETE
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //CANDIDATE MUTATIONS WORKS
    addCandidate: {
      type: CandidateType,
      args: {
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
          .then(resp => resp.data);
      },
    },
    deleteCandidate: {
      type: CandidateType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/candidates/${id}`)
          .then(resp => resp.data);
      },
    },
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
          .then(resp => resp.data);
      },
    },
    //COMPANY MUTATIONS WORKS
    addCompany: {
      type: CompanyType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLNonNull(GraphQLString) },
        industry: { type: GraphQLNonNull(GraphQLString) },
        perks: { type: GraphQLString },
        website: { type: GraphQLString },
        imgURL: { type: GraphQLString },
        vidURL: { type: GraphQLString },
        // CompanyPosition: {},
        // CompanyUser: {},
      },
      resolve(parentValue, { name, location, industry }) {
        return axios
          .post(`http://localhost:3000/companies`, { name, location, industry })
          .then(resp => resp.data);
      },
    },
    deleteCompany: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/companies/${id}`)
          .then(resp => resp.data);
      },
    },
    editCompany: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        location: { type: GraphQLString },
        industry: { type: GraphQLString },
        perks: { type: GraphQLString },
        website: { type: GraphQLString },
        imgURL: { type: GraphQLString },
        vidURL: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .patch(`http://localhost:3000/companies/${args.id}`, args)
          .then(resp => resp.data);
      },
    },
    //COMPANY POSITION MUTATIONS WORKS
    addCompanyPosition: {
      type: CompanyPositionType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        salaryRange: { type: GraphQLString },
        skillsRequired: { type: GraphQLString },
        datePosted: { type: GraphQLString },
        screeningQuestion1: { type: GraphQLString },
        screeningQuestion2: { type: GraphQLString },
        screeningQuestion3: { type: GraphQLString },
        // companyId:{}
      },
      resolve(parentValue, args) {
        return axios
          .post(`http://localhost:3000/companyPositions`, args)
          .then(resp => resp.data);
      },
    },
    deleteCompanyPosition: {
      type: CompanyPositionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/companyPositions/${id}`)
          .then(resp => resp.data);
      },
    },
    editCompanyPosition: {
      type: CompanyPositionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        salaryRange: { type: GraphQLString },
        skillsRequired: { type: GraphQLString },
        datePosted: { type: GraphQLString },
        screeningQuestion1: { type: GraphQLString },
        screeningQuestion2: { type: GraphQLString },
        screeningQuestion3: { type: GraphQLString },
        // companyId:{}
      },
      resolve(parentValue, args) {
        return axios
          .patch(`http://localhost:3000/companyPositions/${args.id}`, args)
          .then(resp => resp.data);
      },
    },
    //COMPANY USERS WORKS
    addCompanyUser: {
      type: CompanyUserType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        isAdmin: { type: GraphQLNonNull(GraphQLBoolean) },
        companyId: { type: GraphQLNonNull(GraphQLString) },
        // companyPositions:{}
      },
      resolve(parentValue, { email, password, isAdmin, companyId }) {
        return axios.post(`http://localhost:3000/companyUsers`, {
          email,
          password,
          isAdmin,
          companyId,
        });
      },
    },
    deleteCompanyUser: {
      type: CompanyUserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/companyUsers/${id}`)
          .then(resp => resp.data);
      },
    },
    editCompanyUser: {
      type: CompanyUserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        companyId: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .patch(`http://localhost:3000/companyUsers/${args.id}`, args)
          .then(resp => resp.data);
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
