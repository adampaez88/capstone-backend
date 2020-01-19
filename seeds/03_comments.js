
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {content: 'First Comment!', like: 0, user_id: 1, post_id: 1}
      ]);
    });
};
