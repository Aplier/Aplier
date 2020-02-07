const dbConn = require('../pg-promise');

const company = `
  type Company {
    id: ID
    name: String!
    location: String!
    industry: String!
    perks: String
    website: String
    imgURL: String
    vidURL: String
  }

  extend type Query {
    company(id: Int!): Company
    companies: [Company!]!
  }

  extend type Mutation {
    addCompany(name: String!,
               industry: String!,
               location: String!): Company
    deleteCompany(id: Int!): Company
    editCompany(id: Int!,
                name: String,
                location: String,
                industry: String,
                perks: String,
                website: String,
                imgURL: String,
                vidURL: String): Company
  }
`;

const companyResolvers = {
  Query: {
    company: (parent, args) => {
      const query = `SELECT * FROM "companies" WHERE id = ${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => console.error(err));
    },
    companies: (parent, args) => {
      const query = `SELECT * FROM "companies"`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  },
  Mutation: {
    addCompany: (parent, {name, industry, location}) => {
      const query = `INSERT INTO "companies" ("name", "industry", "location", "createdAt", "updatedAt")
                     VALUES ($1, $2, $3, $4, $5)`;
      dbConn
      .none(query, [name, industry, location, new Date(), new Date()])
      .then(data => console.log('Added company'))
      .catch(err => console.error(err));
    },
    deleteCompany: (parent, {id}) => {
      const query = `DELETE FROM "companies" WHERE id = ${id}`;
      dbConn
      .none(query)
      .then(data => console.log('Deleted company'))
      .catch(err => console.error(err));
    },
    editCompany: (parent, {id, name, location, industry, perks, website, imgURL, vidURL}) => {
      const query = `UPDATE "companies"
                     SET "name" = $1,
                         "location" = $2,
                         "industry" = $3,
                         "perks" = $4,
                         "website" = $5,
                         "imgURL" = $6,
                         "vidURL" = $7
                     WHERE id = ${id}`;
      dbConn
      .none(query, [name, location, industry, perks, website, imgURL, vidURL])
      .then(data => console.log('Edited company'))
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  company,
  companyResolvers
};
