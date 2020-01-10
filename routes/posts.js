const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/posts', (req, res) => {
    queries
        .posts
        .getAll()
        .then(posts => {
            res.json(posts)
        })
})

router.get('/posts/:id', (req, res) => {
    queries
        .posts
        .getOne(req.params.id)
        .then(post => {
            res.json(post)
        })
})

router.post('/posts', (req, res) => {
    queries
        .posts
        .create(req.body)
        .then(results => {
            res.send(results[0])
        })
})

module.exports = router