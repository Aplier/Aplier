const db = require('./server/db/index')
const {
  Candidate
} = require('./server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const Candidates = await Promise.all([
    Candidate.create({
      firstName: 'Tina',
      lastName: 'Fun',
      email: 'tina@email.com',
      password: '123',
      address: 'NYC',
      phone: '123-123-1234',
      intro: 'My name is Tina, please hire me.',
      admin: true
    }),
    Candidate.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@email.com',
      password: '123',
      address: '10 Wall Street',
      phone: '111-123-1234',
      intro: 'The best dev you can ever hire',
      admin: false
    }),
    Candidate.create({
        firstName: 'Depak',
        lastName: 'Borhara',
        email: 'depak@email.com',
        password: '123',
        address: '10 w 10th Street',
        phone: '111-222-1234',
        intro: 'React Master',
        admin: true
    }),
    //   Candidate.create({
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'john@email.com',
    //     password: '123',
    //     address: '10 Wall Street',
    //     phone: '111-123-1234',
    //     intro: 'The best dev you can ever hire',
    //     admin: false
    // }),
  ])

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed