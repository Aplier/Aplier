const chai = require('chai');
const expect = chai.expect;
const { graphql } = require('graphql');
const schema = require('../schema');
const models = require('../../db/models');

const oneCandidate = {
  id: 'Should return a specific candidate',
  request: `
    query {
      candidate (id: 2) {
        firstName
        lastName
      }
    }
  `,
  variables: {id: 2},
  context: { models: models },
  expected: {
    data: {
      candidate: {
        firstName: "Tina",
        lastName: "Fun"
      }
    }
  }
};

const allCandidates = {
  id: 'Should return all candidates',
  request: `
    query {
      candidates {
        firstName
        lastName
      }
    }
  `,
  variables: {},
  context: { models: models },
  expected: {
    data: {
      candidates: [{
        firstName: "Jane",
        lastName: "Bing"
      },{
        firstName: "Tina",
        lastName: "Fun"
      },{
        firstName: "Tony",
        lastName: "Melendez"
      },{
        firstName: "Mike",
        lastName: "Daniels"
      },{
        firstName: "John",
        lastName: "Doe"
      },{
        firstName: "Depak",
        lastName: "Borhara"
      },{
        firstName: "Remi",
        lastName: "Mendoza"
      }]
    }
  }
};

describe('GraphQL', () => {
  describe('Candidates', () => {
    const cases = [oneCandidate, allCandidates];
    cases.forEach(obj => {
      const {id, request, variables, context, expected} = obj;
      it(`${id}`, async () => {
        const result = await graphql(schema, request, null, context, variables);
        expect(result).to.eql(expected);
      });
    });
  });
});
