const dbConn = require('../pg-promise');

const candidate = `
  type Candidate {
    id: ID
    firstName: String!
    lastName: String!
    address: String
    email: String!
    password: String!
    phone: String
    intro: String
    imgURL: String
    videoURL: String
  }

  extend type Query {
    candidate(id: Int!): Candidate
    candidates: [Candidate!]!
  }

  extend type Mutation {
    addCandidate(firstName: String!,
                 lastName: String!,
                 email: String!,
                 password: String!): Candidate
    deleteCandidate(id: Int!): Candidate
    editCandidate(id: Int!,
                  firstName: String,
                  lastName: String,
                  address: String,
                  email: String,
                  password: String,
                  phone: String,
                  intro: String,
                  imgURL: String,
                  videoURL: String): Candidate
  }
`;

const candidateResolvers = {
  Query: {
    candidate: (parent, args) => {
      const query = `SELECT * FROM "candidates" WHERE id = ${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => `This error is ${err}`);
    },
    candidates: (parent, args) => {
      const query = 'SELECT * FROM "candidates"';
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => `This error is ${err}`);
    }
  },
  Mutation: {
    addCandidate: (parent, {firstName, lastName, email, password}) => {
      const query = `INSERT INTO "candidates" ("firstName", "lastName", "email", "password", "createdAt", "updatedAt")
                     VALUES ($1, $2, $3, $4, $5, $6)`;
      dbConn
      .none(query, [firstName, lastName, email, password, new Date(), new Date()])
      .then(data => console.log('Added candidate'))
      .catch(err => console.error(err));
    },
    deleteCandidate: (parent, {id}) => {
      const query = `DELETE FROM "candidates" WHERE id = ${id}`;
      dbConn
      .none(query)
      .then(data => console.log('Deleted candidate'))
      .catch(err => console.error(err));
    },
    editCandidate: (parent, {id, firstName, lastName, address, email, password, phone, intro, imgURL, videoURL}) => {
      const query = `UPDATE "candidates"
                     SET "firstName" = $1,
                         "lastName" = $2,
                         "address" = $3,
                         "email" = $4,
                         "password" = $5,
                         "phone" = $6,
                         "intro" = $7,
                         "imgURL" = $8,
                         "videoURL" = $9
                     WHERE id = ${id}`;
      dbConn
      .none(query, [firstName, lastName, address, email, password, phone, intro, imgURL, videoURL])
      .then(data => console.log('Edited candidate'))
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  candidate,
  candidateResolvers
};
