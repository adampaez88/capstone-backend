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

router.put('/posts/:id', (req, res) => {
    queries
        .posts
        .update(req.params.id, req.body)
        .then(data => res.json(data))
})

router.delete('/posts/:id', (req, res) => {
    queries
        .posts
        .destroy(req.params.id)
        .then(res.send(204))
})

module.exports = router