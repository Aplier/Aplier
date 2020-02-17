const db = require('./server/db/index');
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
  PositionsSkill,
} = require('./server/db/models');

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log('db synced!');
  } catch (error) {
    console.log('DB Sync Error', error);
  }

  try {
    const CurrentJobs = await Promise.all([
      CurrentJob.create({
        companyName: 'Amazon',
        position: 'Software Developer',
        startDate: new Date(2018, 1, 1),
      }),
      CurrentJob.create({
        companyName: 'Facebook',
        position: 'Senior Software Developer',
        startDate: new Date(2019, 2, 2),
      }),
      CurrentJob.create({
        companyName: 'Google',
        position: 'Backend Developer',
        startDate: new Date(2018, 2, 2),
      }),
      CurrentJob.create({
        companyName: 'Apple',
        position: 'Fullstack Developer',
        startDate: new Date(2018, 2, 2),
      }),
      CurrentJob.create({
        companyName: 'Etsy',
        position: 'ios Developer',
        startDate: new Date(2018, 2, 2),
      }),
      CurrentJob.create({
        companyName: 'Fullstack Academy',
        position: 'Fullstack Instructor',
        startDate: new Date(2018, 2, 2),
      }),
      CurrentJob.create({
        companyName: 'Samsung',
        position: 'Andriod Developer',
        startDate: new Date(2018, 2, 2),
      }),
    ]);
  } catch (error) {
    console.log('Company Seed Error :', error);
  }

  const Candidates = await Promise.all([
    Candidate.create({
      firstName: 'Tina',
      lastName: 'Fun',
      email: 'tina@gmail.com',
      password: '123',
      address: 'New York',
      phone: '347-154-1233',
      intro: 'My name is Tina, please hire me.',
      admin: true,
      imgURL: 'https://media-exp1.licdn.com/dms/image/C4D03AQGqXZ-DfOk3dQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=02SdPdDT1Zbo_E3ROQUquxsRtQBi0kIhSYgHDaLqXuE',
      // videoURL: '',
      currentjobId: 1
    }),
    Candidate.create({
      firstName: 'Jane',
      lastName: 'Bing',
      email: 'BingJane@gmail.com',
      password: '123',
      address: 'New York',
      phone: '212-774-6460',
      intro: 'Test Unit Designer',
      admin: true,
      imgURL: 'https://i.imgur.com/dmo3oL0.png',
      currentjobId: 2
    }),
    Candidate.create({
      firstName: 'Mike',
      lastName: 'Daniels',
      email: 'Mike@gmail.com',
      password: '123',
      address: 'New York',
      phone: '646-651-1437',
      intro: 'UX-UI Designer expertise',
      admin: true,
      imgURL: 'https://i.imgur.com/kKgdwyu.png',
      currentjobId: 3
    }),
    Candidate.create({
      firstName: 'Marvin',
      lastName: 'Huang',
      email: 'MH@gmail.com',
      password: '123',
      address: 'New York',
      phone: '212-898-1266',
      intro: 'Software Engineer specializing in SQl, and Graphql',
      admin: false,
      imgURL: 'https://media-exp1.licdn.com/dms/image/C4D03AQEPeIvZ2xE-RQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=KTfcAPklrXqGyZ84A5aCLeFJT8OKwzoL_2QkMQNPPHQ',
      currentjobId: 4
    }),
    Candidate.create({
      firstName: 'Tony',
      lastName: 'Melendez',
      email: 'tonyMelendez@gmail.com',
      password: '123',
      address: 'LA',
      phone: '212-145-7734',
      intro: 'Cyber security Expert',
      admin: false,
      imgURL: 'https://i.imgur.com/fuBJCqx.png',
      // videoURL: '',
      currentjobId: 5
    }),
    Candidate.create({
        firstName: 'Depak',
        lastName: 'Borhara',
        email: 'depak@gmail.com',
        password: '123',
        address: 'New York',
        phone: '111-222-1234',
        intro: 'React Master',
        admin: true,
        imgURL: 'https://media-exp1.licdn.com/dms/image/C4D03AQGvl34LG-jI_A/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=Ctzy0buBfTCwUyGl2fhKhDtda8aLBW4oJqAGgjiFHjQ',
        currentjobId: 6
    }),
    Candidate.create({
      firstName: 'Remi',
      lastName: 'Mendoza',
      email: 'RemiMendoza@gmail.com',
      password: '123',
      address: 'New York',
      phone: '646-646-6464',
      intro: 'React-Native Master',
      admin: true,
      imgURL: 'https://i.imgur.com/Q7kyCzR.png',
      currentjobId: 7
    }),
  ])

  const Companies = await Promise.all([
    Company.create({
      name: 'Google',
      location: '111 8th Avenue, NY 10011',
      industry: 'Tech',
      perks: 'Free Lunch, and work naps',
      website: 'Google.com',
      imgURL: 'http://tny.im/kFW',
    }),
    Company.create({
      name: 'Twitter',
      location: '249 West 17th Street, NY 10011',
      industry: 'Tech',
      perks: 'Summer Fridays',
      website: 'Twitter.com',
      imgURL: 'https://i.imgur.com/156zQ1o.png',
    }),
    Company.create({
      name: 'Facebook',
      location: '770 Broadway, New York, NY 10003',
      industry: 'Tech',
      perks: 'Unlimited Pizza',
      website: 'Facebook.com',
      imgURL: 'https://i.imgur.com/zPPrLjA.png',
    }),
    Company.create({
      name: 'VaynerMedia',
      location: '10 Hudson yards, New York, NY 10001',
      industry: 'Tech',
      perks: '6 months parental leave',
      website: 'VaynerMedia.com',
      imgURL: 'https://i.imgur.com/wQTrYap.png',
    }),
    Company.create({
      name: 'Etsy',
      location: '10 Hudson yards, New York, NY 10001',
      industry: 'Tech',
      perks: 'Free trips to Europe',
      website: 'Etsy.com',
      imgURL: 'https://i.imgur.com/idXCIgi.png',
    }),
    Company.create({
      name: 'Amazon',
      location: '10 Hudson yards, New York, NY 10001',
      industry: 'Tech',
      perks: 'Free Citibikes, Ride-share year-long',
      website: 'Amazon.com',
      imgURL: 'https://i.imgur.com/bOrzyws.png',
    })
  ])

  try {
    const CompanyUsers = await Promise.all([
      CompanyUser.create({
        email: 'employee@gmail.com',
        password: '123',
        companyId: 3,
      }),
      CompanyUser.create({
        email: 'employee2@gmail.com',
        password: '123',
        companyId: 2,
      }),
      CompanyUser.create({
        email: 'employee3@gmail.com',
        password: '123',
        companyId: 1,
      }),
      CompanyUser.create({
        email: 'employee4@gmail.com',
        password: '123',
        companyId: 4,
      }),
      CompanyUser.create({
        email: 'employee5@gmail.com',
        password: '123',
        companyId: 5,
      }),
    ]);
  } catch (error) {
    console.log('CompanyUser Create Error', error);
  }

  const CompanyPositions = await Promise.all([
    CompanyPosition.create({
      title: 'Fullstack Developer',
      description:
        'Looking for a Fullstack Developer skilled in the NERD stack and based in the New York City area!',
      salaryRange: '$85,000',
      screeningQ1: 'What are JavaScript Data Types?',
      screeningQ2: 'What is Recursion?',
      screeningQ3: 'Explain what is breadth first',
      companyId: 1, // google
      companyUserId: 3,
    }),
    CompanyPosition.create({
      title: 'Front-End Developer',
      description:
        'Looking for a Back-End Developer. skilled in Javascript Concepts',
      salaryRange: '$95,000',
      screeningQ1: 'Explain what is the pop()method in JavaScript?',
      screeningQ2: 'Explain OOP?',
      screeningQ3: 'Describe an example of closure?',
      companyId: 3, // facebook
      companyUserId: 1,
    }),
    CompanyPosition.create({
      title: 'React-Native Developer',
      description:
        'Looking for a React-Native Developer. skilled in Javascript Concepts',
      salaryRange: '$75,000',
      screeningQ1: 'What are the advantages of React Native?',
      screeningQ2: 'How many threads run in React Native?',
      screeningQ3: 'What are Hybrid Apps?',
      companyId: 4, // vayner
      companyUserId: 4,
    }),
    CompanyPosition.create({
      title: 'GraphQl-Apollo Developer',
      description: 'Looking for a GraphQl-Apollo Developer. skilled in Prisma',
      salaryRange: '$124,000',
      screeningQ1: 'What are the advantages of GraphQl?',
      screeningQ2: 'Describe Prisma?',
      screeningQ3: 'What is State?',
      companyId: 2, //twitter
      companyUserId: 2,
    }),
    CompanyPosition.create({
      title: 'UI Designer',
      description: 'Looking for a UI Designer.',
      salaryRange: '$95,000',
      screeningQ1: 'What is UI and UX?',
      screeningQ2: 'What are cons of Functional Programming',
      screeningQ3: 'React native or Swift/Java and why?',
      companyId: 5, // Etsy
      companyUserId: 5,
    }),
    CompanyPosition.create({
      title: 'Lead AWS Engineer',
      description: 'Looking for a engineer with AWS certifications',
      salaryRange: '$140,000',
      screeningQ1: 'What is AWS Cognito?',
      screeningQ2: 'What is RDS?',
      screeningQ3: 'Why go Serverless?',
      companyId: 6, // Amazon
      companyUserId: 5,
    }),
  ])

  const Educations = await Promise.all([
    Education.create({
      name: 'Parsons the New School for Design',
      degree: 'BBA',
      major: 'Strategic Design and Management',
      minor: 'Economics',
      gradDate: new Date(2015, 5, 30),
      candidateId: 1,
    }),
    Education.create({
      name: 'MIT',
      degree: 'AB',
      major: 'Computer Science',
      gradDate: new Date(2006, 5, 30),
      candidateId: 2,
    }),
    Education.create({
      name: 'City University of New York City College',
      degree: 'Bachelor',
      major: 'Political Science and Governmenet',
      gradDate: new Date(2014, 5, 30),
      candidateId: 3,
    }),
    Education.create({
      name: 'NYU',
      degree: 'Bachelor',
      major: 'Chemical Engineering',
      gradDate: new Date(2014, 5, 30),
      candidateId: 4,
    }),
    Education.create({
      name: 'UCLA',
      degree: 'Bachelor',
      major: 'Accounting',
      gradDate: new Date(2014, 5, 30),
      candidateId: 5,
    }),
    Education.create({
      name: 'USC',
      degree: 'Bachelor',
      major: 'Finance',
      gradDate: new Date(2014, 5, 30),
      candidateId: 6,
    }),
    Education.create({
      name: 'Columbia University',
      degree: 'Bachelor',
      major: 'Electrical Engineering',
      gradDate: new Date(2014, 5, 30),
      candidateId: 7,
    }),
  ]);

  const PreviousJobs = await Promise.all([
    PreviousJob.create({
      companyName: 'Apple',
      position: 'Software Developer',
      startDate: new Date(2015, 1, 1),
      endDate: new Date(2017, 12, 1),
      candidateId: 2,
    }),
  ]);

  const Skills = await Promise.all([
    Skill.create({
      skill: 'JavaScript',
    }),
    Skill.create({
      skill: 'React',
    }),
    Skill.create({
      skill: 'Ruby',
    }),
    Skill.create({
      skill: 'Python',
    }),
    Skill.create({
      skill: 'Redux',
    }),
    Skill.create({
      skill: 'C++',
    }),
    Skill.create({
      skill: 'CSS',
    }),
    Skill.create({
      skill: 'React-Native',
    }),
    Skill.create({
      skill: 'GraphQl',
    }),
  ]);

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
    }),
  ]);

  const CandidateSkills = await Promise.all([
    CandidateSkill.create({
      candidateId: 1,
      skillId: 1,
    }),
    CandidateSkill.create({
      candidateId: 1,
      skillId: 2,
    }),
    CandidateSkill.create({
      candidateId: 1,
      skillId: 5,
    }),
    CandidateSkill.create({
      candidateId: 1,
      skillId: 7,
    }),
    CandidateSkill.create({
      candidateId: 2,
      skillId: 1,
    }),
    CandidateSkill.create({
      candidateId: 2,
      skillId: 2,
    }),
    CandidateSkill.create({
      candidateId: 2,
      skillId: 3,
    }),
    CandidateSkill.create({
      candidateId: 2,
      skillId: 4,
    }),
    CandidateSkill.create({
      candidateId: 3,
      skillId: 1,
    }),
    CandidateSkill.create({
      candidateId: 3,
      skillId: 2,
    }),
    CandidateSkill.create({
      candidateId: 3,
      skillId: 4,
    }),
    CandidateSkill.create({
      candidateId: 3,
      skillId: 6,
    }),
  ]);

  const PositionSkill = await Promise.all([
    PositionsSkill.create({
      companyPositionId: 1,
      skillId: 1,
    }),
    PositionsSkill.create({
      companyPositionId: 1,
      skillId: 2,
    }),
    PositionsSkill.create({
      companyPositionId: 1,
      skillId: 5,
    }),
    PositionsSkill.create({
      companyPositionId: 1,
      skillId: 7,
    }),
    PositionsSkill.create({
      companyPositionId: 2,
      skillId: 1,
    }),
    PositionsSkill.create({
      companyPositionId: 2,
      skillId: 2,
    }),
    PositionsSkill.create({
      companyPositionId: 2,
      skillId: 3,
    }),
    PositionsSkill.create({
      companyPositionId: 2,
      skillId: 4,
    }),
    PositionsSkill.create({
      companyPositionId: 3,
      skillId: 1,
    }),
    PositionsSkill.create({
      companyPositionId: 3,
      skillId: 2,
    }),
    PositionsSkill.create({
      companyPositionId: 3,
      skillId: 4,
    }),
    PositionsSkill.create({
      companyPositionId: 3,
      skillId: 6,
    }),
  ]);

  console.log(`seeded successfully`);
};

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
