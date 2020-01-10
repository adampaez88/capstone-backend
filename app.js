const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const posts = require('./routes/posts')
const comments = require('./routes/comments')
const users = require('./routes/users')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(posts)
app.use(comments)
app.use(users)


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})