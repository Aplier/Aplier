const graphql = require('graphql');
const axios = require('axios');

const connectionString = 'postgresql://localhost:5432/aplier'


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
  name: 'companyPosition',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    salaryRange: { type: GraphQLString },
    datePosted: { type: GraphQLString },
    skillsRequired: { type: GraphQLString },
    screeningQuestion1: { type: GraphQLString },
    screeningQuestion2: { type: GraphQLString },
    screeningQuestion3: { type: GraphQLString },
    companyId: {type: GraphQLID},
    companyUserId: {type: GraphQLID}
  }),
});

const CompanyUserType = new GraphQLObjectType({
  name: 'companyUser',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    companyId: {type: GraphQLID},
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
  }),
});

const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    degree: { type: GraphQLString },
    major: { type: GraphQLString },
    minor: { type: GraphQLString },
    gradDate: { type: GraphQLString },

    candidateId: { type: GraphQLID },

  }),
});

const CurrentJobType = new GraphQLObjectType({
  name: 'currentJob',
  fields: () => ({
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },

    position: { type: GraphQLString },
    startDate: { type: GraphQLString },
    candidateId: { type: GraphQLID },

  }),
});

const PreviousJobType = new GraphQLObjectType({
  name: 'previousJob',
  fields: () => ({
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    position: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },

    candidateId: { type: GraphQLID },

  }),
});

const CandidateType = new GraphQLObjectType({
  name: 'Candidate',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    address: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },

    phone: { type: GraphQLString },

    intro: { type: GraphQLString },
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
        const query = 'SELECT * FROM "candidates"';
        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
    },
    education: {
      type: GraphQLList(EducationType),
      args: { candidateId: { type: GraphQLID } },
      resolve(parentValue, args) {

        const query = `SELECT * FROM "education"WHERE education."candidateId"=${args.candidateId}`;

        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
    },
    previousJob: {
      type: GraphQLList(PreviousJobType),
      args: { candidateId: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "previousjobs" WHERE previousjobs."candidateId"=${args.candidateId}`;
        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
    },
    currentJob: {
      type: GraphQLList(CurrentJobType),
      args: { candidateId: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "currentjobs" WHERE currentjobs."candidateId"=${args.candidateId}`;
        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "companies" WHERE id=${args.id}`;
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
    companies: {
      type: GraphQLList(CompanyType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM "companies"`;
        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
    },
    user: {
      type: CompanyUserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "companyUsers" WHERE id=${args.id}`;
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
    users: {
      type: GraphQLList(CompanyUserType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM "companyUsers"`;
        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
    },
    positionCompanyInfo: {
      type: CompanyType,
      args: { companyId: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "companies" WHERE companies.id=${args.companyId}`;
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
    positions: {
      type: GraphQLList(CompanyPositionType),
      resolve(parentValue, args) {
        const query = 'SELECT * FROM "companyPositions"';
        return db.conn
          .many(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });
      },
    },
  },
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
      resolve(parentValue, { firstName, lastName, email, password, address }) {
        return axios
          .post(`http://localhost:3000/candidates`, {
            firstName,
            lastName,
            email,
            password,
            address,
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
