const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = 'DUMB'

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

// router.post('/users', (req, res) => {
//     queries
//         .users
//         .create(req.body)
//         .then(results => {
//             res.send(results[0])
//         })
// })

router.post('/users', (request, response) => {
    queries
        .users
        .create(request.body)
        .then(user => {
            if(!user){
                response.status(401).json({error:'Invalid'})
            } else {
                jwt.sign(user, SECRET, (error, token) => {
                    if(error) throw new Error(error)
                    response.status(201).json({ token })
                })
            } 
        })
        .catch(err => response.status(401).json({error: err.message}))
})

router.delete('/users/:id', (req, res) => {
    queries
        .users
        .destroy(req.params.id)
        .then(res.send(204))
}) 

router.post('/login', (request, response) => {
    queries
        .login
        .authorizeUser(request.body)
        .then(user => {
            if(!user){
                response.status(401).json({error:'No User Found'})
            } else {
                return bcrypt.compare(request.body.password, user.password_digest)
                    .then(isAuthenticated => {
                        if(!isAuthenticated){
                            response.status(401).json({error: 'Invalid'})
                        } else {
                            return jwt.sign(user, SECRET, (error, token) => {
                                response.status(200).json({ token })
                            })
                        } 
                    })
            } 
        })

})

router.get('/authorize', (request, response, next) => {
    if(!request.headers.authorization){
        return response.status(401).json({error: 'failed'})
    }
    const token = request.headers.authorization.split(' ')[1]
    jwt.verify(token, SECRET, (error, decodedToken) => {
        if(error){
            response.status(401).json({ message: 'not today' })
        } else{
            response.status(200).json({ message: 'killed it' })
        }
    })
})


module.exports = router