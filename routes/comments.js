const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/comments', (req, res) => {
    queries
        .comments
        .getAll()
        .then(comments => {
            res.json(comments)
        })
})

router.get('/comments/:id', (req, res) => {
    queries
        .comments
        .getOne(req.params.id)
        .then(comment => {
            res.json(comment)
        })
})

router.post('/comments', (req, res) => {
    queries
        .comments
        .create(req.body)
        .then(results => {
            res.send(results[0])
        })
})

module.exports = router