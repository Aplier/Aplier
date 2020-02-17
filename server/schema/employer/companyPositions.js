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
    company: Company
    companyUser: CompanyUser
    skills: [Skill]
    candidates: [Candidate]

  }

  extend type Query {
    companyPosition(id: Int,
                    title: String,
                    companyId: Int): CompanyPositions
    companyPositions: [CompanyPositions!]!
  }

  extend type Mutation {
    addCompanyPosition(title: String,
                       description: String,
                       salaryRange: String,
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
    companyPosition: (parent, args, { models }) => {
      try {
        return models.CompanyPosition.findOne({
          where: args,
          include: [
            {
              model: models.Company,
            },
            {
              model: models.CompanyUser,
            },
            {
              model: models.Skill,
            },
            {
              model: models.Candidate,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    },

    companyPositions: (parent, args, { models }) => {
      try {
        return models.CompanyPosition.findAll({
          include: [
            {
              model: models.Company,
            },
            {
              model: models.CompanyUser,
            },
            {
              model: models.Skill,
            },
            {
              model: models.Candidate,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    },
  },

  Mutation: {
    addCompanyPosition: (parent, args, { models }) => {
      try {
        return models.CompanyPosition.create(args);
      } catch (err) {
        console.error(err);
      }
    },

    deleteCompanyPosition: (parent, { id }, { models }) => {
      try {
        models.CompanyPosition.destroy({
          where: {
            id: id,
          },
        });
      } catch (err) {
        console.error(err);
      }
    },

    editCompanyPosition: (parent, args, { models }) => {
      try {
        return models.CompanyPosition.update(args, {
          where: {
            id: args.id,
          },
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = {
  companyPositions,
  companyPositionsResolvers,
};
