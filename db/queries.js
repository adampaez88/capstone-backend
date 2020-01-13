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
            post.like = 0
            return knex('posts').insert(post).returning('*')
        },
        update: function(id, post){
            return knex('posts').where('id', id).update(post).returning('*')
        },
        destroy: function(id){
            return knex('posts').where('id', id).delete()
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
            comment.like = 0
            return knex('comments').insert(comment).returning('*')
        },
        update: function(id, comment){
            return knex('comments').where('id', id).update(comment).returning('*')
        },
        destroy: function(id){
            return knex('comments').where('id', id).delete()
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