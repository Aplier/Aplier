const companyUser = `
  type CompanyUser {
    id: ID
    email: String
    password: String
    companyId: ID
    company: Company
  }

  extend type Query {
    companyUser(id: Int!): CompanyUser
    companyUsers: [CompanyUser!]!
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
    companyUser: (parent, { id }, { models }) => {
      try{
        return models.CompanyUser.findByPk(id, {
          include: {
            model: models.Company
          }
        });
      }catch(err){
        console.error(err);
      }
    },

    companyUsers: (parent, args, { models }) => {
      try{
        return models.CompanyUser.findAll({
          include: {
            model: models.Company
          }
        });
      }catch(err){
        console.error(err);
      }
    }
  },

  Mutation: {
    addCompanyUser: (parent, args, { models }) => {
      try{
        return models.CompanyUser.create(args);
      }catch(err){
        console.error(err);
      }
    },

    deleteCompanyUser: (parent, { id }, { models }) => {
      try{
        models.CompanyUser.destroy({
          where: {
            id: id
          }
        });
      }catch(err){
        console.error(err);
      }
    },

    editCompanyUser: (parent, args, { models }) => {
      try{
        return models.CompanyUser.update(args, {
          where: {
            id: args.id
          }
        })
      }catch(err){
        console.error(err);
      }
    }
  }
};

module.exports = {
  companyUser,
  companyUserResolvers
};
