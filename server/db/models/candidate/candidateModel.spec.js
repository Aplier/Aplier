const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const Candidate = require('./candidate')
const db = require('../../db')

describe('The `Candidate` model', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })


  beforeEach(() => {

    let john = Candidate.build({
      firstName: 'john',
      lastName: 'bond'
    });
  });

  it('includes `title` and `content` fields', async () => {

    const newCandidate = await Candidate.save();
    expect(newCandidate.firstName).to.equal('john');
    expect(newCandidate.lastName).to.equal('bond');

  });


})
