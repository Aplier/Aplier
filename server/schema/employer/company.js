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
    company: (parent, { id }, { models }) => {
      try{
        return models.Company.findByPk(id);
      }catch(err){
        console.error(err);
      }
    },

    companies: (parent, args, { models }) => {
      try{
        return models.Company.findAll();
      }catch(err){
        console.error(err);
      }
    }
  },

  Mutation: {
    addCompany: (parent, args, { models }) => {
      try{
        return models.Company.create(args);
      }catch(err){
        console.error(err);
      }
    },

    deleteCompany: (parent, { id }, { models }) => {
      try{
        models.Company.destroy({
          where: {
            id: id
          }
        });
      }catch(err){
        console.error(err);
      }
    },

    editCompany: (parent, args, { models }) => {
      try{
        return models.Company.update(args, {
          where: {
            id: args.id
          }
        });
      }catch(err){
        console.error(err);
      }
    }
  }
};

module.exports = {
  company,
  companyResolvers
};
