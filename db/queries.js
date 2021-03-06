const knex = require('./database')
const bcrypt = require('bcrypt')

module.exports = {
    posts: {
        getAll: function(){
           return knex('posts')
           .then(posts => {
            const promises = posts.map(post => {
                return knex('users')
                    .where({id: post.user_id})
                    .first()
                    .then(user => {
                        post.user = user
                        return post
                    })
            })
            return Promise.all(promises)
        })
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
            // the code below is how you set up a one to many relationship
            .then(comments => {
                const promises = comments.map(comment => {
                    return knex('users')
                        .where({id: comment.user_id})
                        .first()
                        .then(user => {
                            comment.user = user
                            return comment
                        })
                })
                return Promise.all(promises)
            })
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
        create: (user) => {
            return bcrypt.hash(user.password, 12)
            .then(hash => {
                    return knex('users')
                        .insert({
                            email: user.email,
                            username: user.username,
                            password_digest: hash
                        })
                        .returning(['id', 'username'])
                        .then(users => users[0])
            })
        }, 
        destroy: function(id){
             return knex('users').where('id', id).delete()
        }
    },
    login: {
        authorizeUser: (user) => {
            return knex('users')
            .where({username: user.username})
            .first()
        }
    }
}