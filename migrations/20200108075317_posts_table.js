
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
      table.increments()
      table.string('image_url')
      table.integer('like')
      table.integer('dislike')
      table.string('content')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
};
