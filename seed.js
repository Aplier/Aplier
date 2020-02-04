const db = require('./server/db/index')
const {
  Candidate,
  Education,
  CurrentJob,
  PreviousJob,
  Skill,
  Company,
  CompanyPosition,
  CompanyUser,
  CandidateSkill,
  PositionsSkill
  } = require('./server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const CurrentJobs = await Promise.all([
    CurrentJob.create({
      companyName: 'Amazon',
      position: 'Software Developer',
      startDate: new Date(2018, 1, 1),
    }),
    CurrentJob.create({
      companyName: 'Facebook',
      position: 'Senior Software Developer',
      startDate: new Date(2019, 2, 2)
    }),
    CurrentJob.create({
      companyName: 'Google',
      position: 'Backend Developer',
      startDate: new Date(2018, 2, 2)
    }),

  ])

  const Candidates = await Promise.all([
    Candidate.create({
      firstName: 'Tina',
      lastName: 'Fun',
      email: 'tina@gmail.com',
      password: '123',
      address: 'NYC',
      phone: '123-123-1234',
      intro: 'My name is Tina, please hire me.',
      admin: true,
      imageURL: 'https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/08/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg',
      // videoURL: '',
      currentjobId: 1
    }),
    Candidate.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      password: '123',
      address: '10 Wall Street',
      phone: '111-123-1234',
      intro: 'The best dev you can ever hire',
      admin: false,
      imageURL: 'data:image/jpeg;base64,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',
      // videoURL: '',
      currentjobId: 2
    }),
    Candidate.create({
        firstName: 'Depak',
        lastName: 'Borhara',
        email: 'depak@gmail.com',
        password: '123',
        address: '10 w 10th Street',
        phone: '111-222-1234',
        intro: 'React Master',
        admin: true
    }),
    Candidate.create({
      firstName: 'Remi',
      lastName: 'Mendoza',
      email: 'remi@gmail.com',
      password: '123',
      address: 'Bronx New York',
      phone: '646-646-6464',
      intro: 'React-Native Master',
      admin: true
    }),
  ])

  const Companies = await Promise.all([
    Company.create({
      name: 'Google',
      location: '111 8th Avenue, NY 10011',
      industry: 'Tech',
      perks: 'free Lunch',
      website: 'google.com',
      imgUrl: 'http://tny.im/kFW',
      companyId: 3
    }),
    Company.create({
      name: 'Twitter',
      location: '249 West 17th Street, NY 10011',
      industry: 'Tech',
      perks: 'Summer Fridays',
      website: 'twitter.com',
      imgUrl: 'http://tny.im/kFX',
    }),
    Company.create({
      name: 'Facebook',
      location: '770 Broadway, New York, NY 10003',
      industry: 'Tech',
      perks: 'Unlimited Pizza',
      website: 'facebook.com',
      imgUrl: 'http://tny.im/kFY',
    }),
    Company.create({
      name: 'VaynerMedia',
      location: '10 Hudson yards, New York, NY 10001',
      industry: 'Tech',
      perks: '6 months parental leave',
      website: 'vaynerMedia.com',
      imgUrl: 'http://tny.im/kG0',
    })
  ])

  const CompanyUsers = await Promise.all([
    CompanyUser.create({
      email: 'employee@gmail.com',
      password: '123',
    }),
    CompanyUser.create({
      email: 'employee2@gmail.com',
      password: '123',
    }),
    CompanyUser.create({
      email: 'employee3@gmail.com',
      password: '123',
    }),
    CompanyUser.create({
      email: 'employee4@gmail.com',
      password: '123',
    })
  ])
  const CompanyPositions = await Promise.all([
    CompanyPosition.create({
      title: 'Front-End Developer',
      description: 'Looking for a Front-End Developer. skilled in frameworks such as React or Angular based in the New York City area!',
      salaryRange: '$85,0000',
      screeningQ1: 'What are JavaScript Data Types?',
      screeningQ2: 'What is Recursion?',
      screeningQ3: 'Explain the difference between "==" and "==="?',
      companyId: 1,
      companyuserId: 3
    }),
    CompanyPosition.create({
      title: 'Front-End Developer',
      description: 'Looking for a Back-End Developer. skilled in Javascript Concepts',
      salaryRange: '$95,0000',
      screeningQ1: 'Explain what is pop()method in JavaScript?',
      screeningQ2: 'Explain OOP?',
      screeningQ3: 'explain closures in JavaScript?',
      companyId: 2,
      companyuserId: 1
    }),
    CompanyPosition.create({
      title: 'React-Native Developer',
      description: 'Looking for a React-Native Developer. skilled in Javascript Concepts',
      salaryRange: '$75,0000',
      screeningQ1: 'What are the advantages of React Native?',
      screeningQ2: 'How many threads run in React Native?',
      screeningQ3: 'What are Hybrid Apps?',
      companyId: 3,
      companyuserId: 1
    }),
  ])

  const Educations = await Promise.all([
    Education.create({
      name: 'Parsons the New School for Design',
      degree: 'BBA',
      major: 'Strategic Design and Management',
      minor: 'Economics',
      gradDate: new Date(2015, 5, 30),
      candidateId: 1
    }),
    Education.create({
      name: 'MIT',
      degree: 'AB',
      major: 'Computer Science',
      gradDate: new Date(2006, 5, 30),
      candidateId: 2
    }),
    Education.create({
      name: 'City University of New York City College',
      degree: 'Bachelor',
      major: 'Political Science and Governmenet',
      gradDate: new Date(2014, 5, 30),
      candidateId: 3
    }),
  ])

  const PreviousJobs = await Promise.all([
    PreviousJob.create({
      companyName: 'Apple',
      position: 'Software Developer',
      startDate: new Date(2015, 1, 1),
      endDate: new Date(2017, 12, 1),
      candidateId: 2
    }),

  ])

  const Skills = await Promise.all([
    Skill.create({
      type: 'JavaScript'
    }),
    Skill.create({
      type: 'React'
    }),
    Skill.create({
      type: 'Ruby'
    }),
    Skill.create({
      type: 'Python'
    }),
    Skill.create({
      type: 'Redux'
    }),
    Skill.create({
      type: 'C++'
    }),
    Skill.create({
      type: 'CSS'
    }),
    Skill.create({
      type: 'React-Native'
    }),
  ])

  const CandidateSkills = await Promise.all([
    CandidateSkill.create({
      candidateId:1,
      skillId: 1
    }),
    CandidateSkill.create({
      candidateId:1,
      skillId: 2
    }),
    CandidateSkill.create({
      candidateId:1,
      skillId: 5
    }),
    CandidateSkill.create({
      candidateId:1,
      skillId: 7
    }),
    CandidateSkill.create({
      candidateId:2,
      skillId: 1
    }),
    CandidateSkill.create({
      candidateId:2,
      skillId: 2
    }),
    CandidateSkill.create({
      candidateId:2,
      skillId: 3
    }),
    CandidateSkill.create({
      candidateId:2,
      skillId: 4
    }),
    CandidateSkill.create({
      candidateId:3,
      skillId: 1
    }),
    CandidateSkill.create({
      candidateId:3,
      skillId: 2
    }),
    CandidateSkill.create({
      candidateId:3,
      skillId: 4
    }),
    CandidateSkill.create({
      candidateId:3,
      skillId: 6
    }),

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
