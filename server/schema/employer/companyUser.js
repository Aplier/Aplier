const dbConn = require('../pg-promise');

const companyUser = `
  type CompanyUser {
    id: ID
    email: String
    password: String
    companyId: ID
  }

  extend type Query {
    user(id: Int!): CompanyUser
    users: [CompanyUser!]!
  }

  extend type Mutation {
    addCompanyUser(email: String,
                   password: String
                   companyId: Int!): CompanyUser
    deleteCompanyUser(id: Int!): CompanyUser
    editCompanyUser(id: Int!,
                    email: String,
                    password: String,
                    companyId: Int!): CompanyUser
  }
`;

const companyUserResolvers = {
  Query: {
    user: (parent, args) => {
      const query = `SELECT * FROM "companyUsers" WHERE id=${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => console.error(err));
    },
    users: (parent, args) => {
      const query = `SELECT * FROM "companyUsers"`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  },
  Mutation: {
    addCompanyUser: (parent, {email, password, companyId}) => {
      const query = `INSERT INTO "companyUsers" ("email", "password", "companyId", "createdAt", "updatedAt")
                     VALUES ($1, $2, $3, $4, $5)`;
      dbConn
      .none(query, [email, password, companyId, new Date(), new Date()])
      .then(data => console.log('Added company user'))
      .catch(err => console.error(err));
    },
    deleteCompanyUser: (parent, {id}) => {
      const query = `DELETE FROM "companyUsers" WHERE id = ${id}`;
      dbConn
      .none(query)
      .then(data => console.log('Deleted company user'))
      .catch(err => console.error(err));
    },
    editCompanyUser: (parent, {id, email, password, companyId}) => {
      const query = `UPDATE "companyUsers"
                     SET "email" = $1,
                         "password" = $2,
                         "companyId" = $3
                     WHERE id = ${id}`;
      dbConn
      .none(query, [email, password, companyId])
      .then(data => console.log('Edited company user'))
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  companyUser,
  companyUserResolvers
};
