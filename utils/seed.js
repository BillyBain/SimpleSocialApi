const connection = require('../config/connection');
const { User, Reactions, Thoughts } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thoughts.deleteMany({});
  await User.deleteMany({});
  await Reactions.deleteMany({});

const users = [
  {
  username: "Test1",
  email: "test@test.com"
  },
  {
    username: "Test2",
    email: "test2@test.com"
  },
  {
    username: "Test3",
    email: "test3@test.com"
  }
];
  const thoughts = [
    {
      thoughtText: "Here be test text, 1.",
      username: "Test1"
    },
    {
      thoughtText: "Here be test text, 2.",
      username: "Test1"
    },
    {
      thoughtText: "Here be test text, 3.",
      username: "Test2"
    }
  ];

  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(thoughts);

  process.exit(0);
});
