
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {content: 'First post!',
         image_url: 'https://images.unsplash.com/photo-1578519050142-afb511e518de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
         like: 0, user_id: 1}
      ]);
    });
};
