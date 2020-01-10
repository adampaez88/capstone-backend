
exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
      table.increments()
      table.string('content')
      table.integer('like')
      table.integer('dislike')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
};
