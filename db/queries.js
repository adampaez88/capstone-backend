const knex = require('./database')

module.exports = {
    posts: {
        getAll: function(){
           return knex('posts')
        },
        getOne: function(id){
            return knex('posts').where('id', id)
        },
        create: function(post){
            return knex('posts').insert(post).returning('*')
        }
    },
    comments: {
        getAll: function(){
            return knex('comments')
        },
        getOne: function(id){
            return knex('comments').where('id', id)
        },
        create: function(comment){
            return knex('comments').insert(comment).returning('*')
        }
    },
    users: {
        getAll: function(){
            return knex('users')
        },
        getOne: function(id){
            return knex('users').where('id', id)
        },
        create: function(user){
            return knex('users').insert(user).returning('*')
        }
    }
}