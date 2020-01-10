
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments()
      table.string('email')
      table.string('username')
      table.string('password_digest')
  } )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};