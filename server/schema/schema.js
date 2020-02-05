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
} = graphql;

const PositionType = new GraphQLObjectType({
  name: 'Position',
  fields: () => ({
    id: {type:GraphQLID},
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    salaryRange: { type: GraphQLString },
    skillsRequired: { type: GraphQLString },
    datePosted: { type: GraphQLString },
    screeningQuestion1: { type: GraphQLString },
    screeningQuestion2: { type: GraphQLString },
    screeningQuestion3: { type: GraphQLString },
    employer: {
      type: EmployerType,
      resolve(parentValue, args) {
        return axios
        .get(`http://localhost:3000/positions/${parentValue.id}/employer`)
        .then(res => res.data);
      }
    }
  })
})

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
    positions: {
      type: new GraphQLList(PositionType),
      resolve(parentValue, args) {
        return axios
        .get(`http://localhost:3000/employers/${parentValue.id}/positions`)
        .then(res => res.data);
      }
      },
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
    candidateId: {
      type: new GraphQLList(CandidateType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/education/${parentValue.id}/candidates`)
          .then(res => res.data);
      },
    },
  }),
});

const currentjobType = new GraphQLObjectType({
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
    imgURL: { type: GraphQLString },
    vidURL: { type: GraphQLString },
    // admin?
    education: {
      type: EducationType,
      args: { candidateId: { type: GraphQLID } },
        resolve(parentValue, args) {
          const query = `SELECT * FROM "candidates" 
          FULL JOIN "education"
          ON candidates.id = education."candidateId"
          `;
          return db.conn.one(query)
            .then(data => {
              return data;
            })
            .catch(err => {
              return 'The error is' + err;
            });
        }
    }, //to change
    currentjob: {
      type: currentjobType,
      // args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM "candidates" 
        FULL JOIN "currentjobs"
        ON candidates."currentjobId" = currentjobs.id`;
        return db.conn.one(query)
          .then(data => {
            return data;
          })
          .catch(err => {
            return 'The error is' + err;
          });

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
      type: GraphQLList(CandidateType),
      resolve(parentValue, args) {
        // return axios
        //   .get(`http://localhost:3000/candidates/`)
        //   .then(resp => resp.data);
        const query = `SELECT * FROM "candidates"`;
        return db.conn.many(query)
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
    currentjob: {
      type: currentjobType,
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
