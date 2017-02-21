const fixtureFactory = require('fixture-factory');

// 'foobar'
const dummyPassword = '$2a$10$jqtfUwulMw6xqGUA.IsjkuAooNkAjPT3FJ9rRiUoSTsUpNTD8McxC';

fixtureFactory.register('user', {
  email: 'internet.email',
  password: dummyPassword,
});

exports.seed = knex => (
  knex
    .batchInsert('users', fixtureFactory.generate('user', 10))
);