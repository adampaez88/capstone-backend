
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'adam987@comcast.net', username: 'adamlee', password_digest: 'password'}
      ]);
    });
};
