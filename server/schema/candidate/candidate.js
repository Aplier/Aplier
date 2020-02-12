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
    cognitoId:String!
    currentjob: CurrentJob
    skills: [Skill]
    companyPositions: [CompanyPositions]
    }

  extend type Query {
    candidate(id: Int!): Candidate
    candidates: [Candidate!]!
  }

  extend type Mutation {
    addCandidate(firstName: String!,
                 lastName: String!,
                 email: String!,
                 password: String!,
                 cognitoId: String!): Candidate
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
    candidate: (parent, { id }, { models }) => {
      try {
        return models.Candidate.findByPk(id, {
          include: [
            {
              model: models.CurrentJob,
            },
            {
              model: models.Skill,
            },
            {
              model: models.CompanyPosition,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    },

    candidates: (parent, args, { models }) => {
      try {
        return models.Candidate.findAll({
          include: [
            {
              model: models.CurrentJob,
            },
            {
              model: models.Skill,
            },
            {
              model: models.CompanyPosition,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    },
  },

  Mutation: {
    addCandidate: async (parent, args, { models }) => {
      try {
        return models.Candidate.create(args);
      } catch (err) {
        console.error(err);
      }
    },

    deleteCandidate: (parent, { id }, { models }) => {
      try {
        models.Candidate.destroy({
          where: {
            id: id,
          },
        });
      } catch (err) {
        console.error(err);
      }
    },

    editCandidate: (parent, args, { models }) => {
      try {
        return models.Candidate.update(args, {
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
  candidate,
  candidateResolvers,
};
