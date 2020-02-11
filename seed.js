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
  CandidatePositions,
  PositionsSkill
  } = require('./server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

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
      imgURL: 'https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/08/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg',
      // videoURL: '',

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
      imgURL: 'https://vignette.wikia.nocookie.net/characters/images/6/6b/309.png/revision/latest?cb=20141230071329',
      // videoURL: '',
    }),
    Candidate.create({
        firstName: 'Depak',
        lastName: 'Borhara',
        email: 'depak@gmail.com',
        password: '123',
        address: '10 w 10th Street',
        phone: '111-222-1234',
        intro: 'React Master',
        admin: true,
        imgURL: 'https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/08/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg',

    }),
    Candidate.create({
      firstName: 'Remi',
      lastName: 'Mendoza',
      email: 'remi@gmail.com',
      password: '123',
      address: 'Bronx New York',
      phone: '646-646-6464',
      intro: 'React-Native Master',
      admin: true,
      imgURL: 'https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/08/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg',

    }),
  ])

  const CurrentJobs = await Promise.all([
    CurrentJob.create({
      companyName: 'Amazon',
      position: 'Software Developer',
      startDate: new Date(2018, 1, 1),
      candidateId:1
    }),
    CurrentJob.create({
      companyName: 'Facebook',
      position: 'Senior Software Developer',
      startDate: new Date(2019, 2, 2),
      candidateId:2
    }),
    CurrentJob.create({
      companyName: 'Google',
      position: 'Backend Developer',
      startDate: new Date(2018, 2, 2),
      candidateId:3
    }),
    CurrentJob.create({
      companyName: 'Apple',
      position: 'Fullstack Developer',
      startDate: new Date(2018, 2, 2),
      candidateId:4
    })
  ])

  const Companies = await Promise.all([
    Company.create({
      name: 'Google',
      location: '111 8th Avenue, NY 10011',
      industry: 'Tech',
      perks: 'free Lunch',
      website: 'google.com',
      imgUrl: 'http://tny.im/kFW',
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
      companyId: 3
    }),
    CompanyUser.create({
      email: 'employee2@gmail.com',
      password: '123',
      companyId:2
    }),
    CompanyUser.create({
      email: 'employee3@gmail.com',
      password: '123',
      companyId:1
    }),
    CompanyUser.create({
      email: 'employee4@gmail.com',
      password: '123',
      companyId:4
    })
  ])
  const CompanyPositions = await Promise.all([
    CompanyPosition.create({
      title: 'Front-End Developer',
      description: 'Looking for a Front-End Developer. skilled in frameworks such as React or Angular based in the New York City area!',
      salaryRange: '$85,000',
      screeningQ1: 'What are JavaScript Data Types?',
      screeningQ2: 'What is Recursion?',
      screeningQ3: 'Explain the difference between "==" and "==="?',
      companyId: 1,
      companyUserId: 3
    }),
    CompanyPosition.create({
      title: 'Front-End Developer',
      description: 'Looking for a Back-End Developer. skilled in Javascript Concepts',
      salaryRange: '$95,000',
      screeningQ1: 'Explain what is pop()method in JavaScript?',
      screeningQ2: 'Explain OOP?',
      screeningQ3: 'Explain closures in JavaScript?',
      companyId: 3,
      companyUserId: 1
    }),
    CompanyPosition.create({
      title: 'React-Native Developer',
      description: 'Looking for a React-Native Developer. skilled in Javascript Concepts',
      salaryRange: '$75,000',
      screeningQ1: 'What are the advantages of React Native?',
      screeningQ2: 'How many threads run in React Native?',
      screeningQ3: 'What are Hybrid Apps?',
      companyId: 3,
      companyUserId: 1
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
      skill: 'JavaScript'
    }),
    Skill.create({
      skill: 'React'
    }),
    Skill.create({
      skill: 'Ruby'
    }),
    Skill.create({
      skill: 'Python'
    }),
    Skill.create({
      skill: 'Redux'
    }),
    Skill.create({
      skill: 'C++'
    }),
    Skill.create({
      skill: 'CSS'
    }),
    Skill.create({
      skill: 'React-Native'
    }),
  ])


  const CandidatePosition = await Promise.all([
    CandidatePositions.create({
      candidateId: 1,
      companyPositionId: 1,
      applied: true,
    }),
    CandidatePositions.create({
      candidateId: 1,
      companyPositionId: 2,
      applied: false,
    }),
    CandidatePositions.create({
      candidateId: 2,
      companyPositionId: 1,
      applied: false,
    }),
    CandidatePositions.create({
      candidateId: 3,
      companyPositionId: 3,
      applied: false,
    })
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

  const PositionSkill = await Promise.all([
    PositionsSkill.create({
      companyPositionId:1,
      skillId: 1
    }),
    PositionsSkill.create({
      companyPositionId:1,
      skillId: 2
    }),
    PositionsSkill.create({
      companyPositionId:1,
      skillId: 5
    }),
    PositionsSkill.create({
      companyPositionId:1,
      skillId: 7
    }),
    PositionsSkill.create({
      companyPositionId:2,
      skillId: 1
    }),
    PositionsSkill.create({
      companyPositionId:2,
      skillId: 2
    }),
    PositionsSkill.create({
      companyPositionId:2,
      skillId: 3
    }),
    PositionsSkill.create({
      companyPositionId:2,
      skillId: 4
    }),
    PositionsSkill.create({
      companyPositionId:3,
      skillId: 1
    }),
    PositionsSkill.create({
      companyPositionId:3,
      skillId: 2
    }),
    PositionsSkill.create({
      companyPositionId:3,
      skillId: 4
    }),
    PositionsSkill.create({
      companyPositionId:3,
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
