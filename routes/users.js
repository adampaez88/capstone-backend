const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/users', (req, res) => {
    queries
        .users
        .getAll()
        .then(users => {
            res.json(users)
        })
})

router.get('/users/:id', (req, res) => {
    queries
        .users
        .getOne(req.params.id)
        .then(user => {
            res.json(user)
        })
})

router.post('/users', (req, res) => {
    queries
        .users
        .create(req.body)
        .then(results => {
            res.send(results[0])
        })
})

module.exports = router