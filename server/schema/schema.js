const graphql = require('graphql');
const axios = require('axios');
const connectionString = 'postgresql://tinafunmacpro@:5432/aplier'
// const connectionString = 'postgresql://aplier@aplierdb.czniy2ofqmqo.us-east-2.rds.amazonaws.com:5432/aplier'
const pgp = require('pg-promise')();
const db = {}
db.conn = pgp(connectionString);

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = graphql;

const PositionType = new GraphQLObjectType({
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
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/positions/${parentValue.id}/company`)
          .then(res => res.data);
      },
    },
  }),
});

const CompanyUserType = new GraphQLObjectType({
  name: 'CompanyUser',
  fields: () => ({
    id: { type: GraphQLID },
    companyId: { type: GraphQLID },
    positionId: { type: GraphQLID },
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
      type: new GraphQLObjectType(CompanyUserType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.id}/${args.id}`)
          .then(res => res.data);
      },
    },
    positions: {
      type: new GraphQLList(PositionType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/company/${parentValue.id}/positions`)
          .then(res => res.data);
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
          .then(res => res.data);
      },
    },
  }),
});

const currentJobType = new GraphQLObjectType({
  name: 'currentJob',
  fields: () => ({
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    startDate: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});

const previousJobType = new GraphQLObjectType({
  name: 'previousJob',
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
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
    // admin?
    education: {
      type: EducationType,
      resolve(parentValue, args) {
        
        // return axios
        //   .get(`http://localhost:4000/education/${parentValue.educationId}`)
        //   .then(res => res.data);

        // write return in SQL or join monster
      },
    }, //to change
    currentJob: {
      type: currentJobType,
      resolve(parentValue, args) {
        // return axios
        //   .get(`http://localhost:3000/currentPos/${parentValue.currentPosId}`)
        //   .then(res => res.data);
      },
    }, //to change
    previousJob: {
      type: previousJobType,
      resolve(parentValue, args) {
        // return axios
        //   .get(`http://localhost:3000/empHistory/${parentValue.empHistoryId}`)
        //   .then(res => res.data);
      },
    }, //to change
    // industry: { type: GraphQLString },
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
    candidates: {
      type: new GraphQLList(CandidateType),
      resolve(parentValue, args) {
        // return axios
        //   .get(`http://localhost:3000/candidates/`)
        //   .then(resp => resp.data);
        const query = `SELECT * FROM "candidates"`;
        return db.conn.one(query)
           .then(data => {
              return data;
           })
           .catch(err => {
               return 'The error is' + err;
           });
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
    previousJob: {
      type: previousJobType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/empHistory/${args.id}`);
      },
    },
    currentJob: {
      type: currentJobType,
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
    //ADD A COMPANY
    addCompany: {
      type: CompanyType,
      args: {
        // new GraphQLNonNull(GraphQLString) is validation for required
        name: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString },
        industry: { type: new GraphQLNonNull(GraphQLString) },
        perks: { type: GraphQLString },
        website: { type: GraphQLString },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        imgURL: { type: GraphQLString },
        vidURL: { type: GraphQLString },
        users: { type: GraphQLID },
        positions: { type: GraphQLList },
      },
      resolve(parentValue, { name, industry }) {
        return axios
          .post(`http://localhost:3000/companies`, {
            name,
          })
          .then(res => res.data);
      },
    },
    //DELETE A COMPANY(ADMIN PRIV??)
    deleteCompany: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/companies/${id}`)
          .then(res => res.data);
      },
    },
    // EDIT A COMPANY TO DO UPDATE WITH PROPER PARAMS (ADMIN PRIV??)
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
        users: { type: GraphQLID },
        positions: { type: GraphQLList },
      },
      resolve(parentValue, args) {
        return axios
          .patch(`http://localhost:3000/companies/${args.id}`, args)
          .then(res => res.data);
      },
    },

    //ADD A USER UNDER A COMPANY
    addUser: {
      type: CompanyUserType,
      args: {
        companyId: { type: new GraphQLNonNull(GraphQLID) },
        positionId: { type: new GraphQLNonNull(GraphQLID) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        isAdmin: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parentValue, args) {
        return axios
          .post(`http://localhost:3000/company/${parentValue.id}`)
          .then(res => res.data);
      },
    },
    //DELETE A USER UNDER A COMPANY
    deleteUser: {
      type: CompanyUserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios.delete(
          `http://localhost:3000/company/${parentValue.id}/${id}`
        );
      },
    },
    //EDIT A USER
    editUser: {
      type: CompanyUserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        companyId: { type: GraphQLID },
        positionId: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
      },
      resolve(parentValue, args) {
        return axios
          .patch(
            `http://localhost:3000/company/${parentValue.id}/${args.id}`,
            args
          )
          .then(res => res.data);
      },
    },
    //ADD A NEW JOB POSITION
    addPosition: {
      type: PositionType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        salaryRange: { type: GraphQLString },
        skillsRequired: { type: new GraphQLNonNull(GraphQLString) },
        datePosted: { type: new GraphQLNonNull(GraphQLString) },
        screeningQuestion1: { type: new GraphQLNonNull(GraphQLString) },
        screeningQuestion2: { type: GraphQLString },
        screeningQuestion3: { type: GraphQLString },
        company: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, args) {
        return axios.post(
          `http://localhost:3000/positions/${parentValue.name}/company`
        );
      },
    },
    //DELETE A JOB POSITION
    deletePosition: {
      type: PositionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, { id }) {
        return axios.delete(
          `http://localhost:3000/position/${parentValue.id}/${id}`
        );
      },
    },
    //EDIT A JOB POSITION
    editPosition: {
      type: PositionType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        salaryRange: { type: GraphQLString },
        skillsRequired: { type: new GraphQLNonNull(GraphQLString) },
        screeningQuestion1: { type: new GraphQLNonNull(GraphQLString) },
        screeningQuestion2: { type: GraphQLString },
        screeningQuestion3: { type: GraphQLString },
        company: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, args) {
        return axios.patch(
          `http://localhost:3000/positions/${parentValue.id}/${args.id}`
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
