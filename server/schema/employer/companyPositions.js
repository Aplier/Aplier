const dbConn = require('../pg-promise');

const companyPositions = `
  type CompanyPositions {
    id: ID
    title: String
    description: String
    salaryRange: String
    datePosted: String
    screeningQ1: String
    screeningQ2: String
    screeningQ3: String
    companyId: ID
    companyUserId: ID
  }

  extend type Query {
    position(id: Int!): CompanyPositions
    positions: [CompanyPositions!]!
  }

  extend type Mutation {
    addCompanyPosition(title: String,
                       description: String,
                       datePosted: String,
                       companyId: Int!): CompanyPositions
    deleteCompanyPosition(id: Int!): CompanyPositions
    editCompanyPosition(id: Int!,
                        title: String,
                        description: String,
                        salaryRange: String,
                        datePosted: String,
                        screeningQ1: String,
                        screeningQ2: String,
                        screeningQ3: String,
                        companyId: Int!,
                        companyUserId: Int!): CompanyPositions
  }
`;

const companyPositionsResolvers = {
  Query: {
    position: (parent, args) => {
      const query = `SELECT * FROM "companyPositions" WHERE id=${args.id}`;
      return dbConn
      .one(query)
      .then(data => data)
      .catch(err => console.error(err));
    },
    positions: (parent, args) => {
      const query = `SELECT * FROM "companyPositions"`;
      return dbConn
      .many(query)
      .then(data => data)
      .catch(err => console.error(err));
    }
  },
  Mutation: {
    addCompanyPosition: (parent, {title, description, datePosted, companyId}) => {
      const query = `INSERT INTO "companyPositions" ("title", "description", "datePosted", "companyId", "createdAt", "updatedAt")
                     VALUES ($1, $2, $3, $4, $5, $6)`;
      dbConn
      .none(query, [title, description, datePosted, companyId, new Date(), new Date()])
      .then(data => console.log('Added position'))
      .catch(err => console.error(err));
    },
    deleteCompanyPosition: (parent, {id}) => {
      const query = `DELETE FROM "companyPositions" WHERE id = ${id}`;
      dbConn
      .none(query)
      .then(data => console.log('Deleted position'))
      .catch(err => console.error(err));
    },
    editCompanyPosition: (parent, {id, title, description, salaryRange, datePosted, screeningQ1, screeningQ2, screeningQ3, companyId, companyUserId}) => {
      const query = `UPDATE "companyPositions"
                     SET "title" = $1,
                         "description" = $2,
                         "salaryRange" = $3,
                         "datePosted" = $4,
                         "screeningQ1" = $5,
                         "screeningQ2" = $6,
                         "screeningQ3" = $7,
                         "companyId" = $8,
                         "companyUserId" = $9
                     WHERE id = ${id}`;
      dbConn
      .none(query, [title, description, salaryRange, datePosted, screeningQ1, screeningQ2, screeningQ3, companyId, companyUserId])
      .then(data => console.log('Edited position'))
      .catch(err => console.error(err));
    }
  }
};

module.exports = {
  companyPositions,
  companyPositionsResolvers
};
