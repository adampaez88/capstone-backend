
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
      table.increments()
      table.string('image_url')
      table.integer('like')
      table.string('content')
      table.integer('user_id').references('id')
      .inTable('users').onDelete('CASCADE').index()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
};
