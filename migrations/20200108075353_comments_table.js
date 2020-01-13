
exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
      table.increments()
      table.string('content')
      table.integer('like')
      table.integer('post_id').references('id')
      .inTable('posts').onDelete('CASCADE').index()
      table.integer('user_id').references('id')
      .inTable('users').onDelete('CASCADE').index()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
};
