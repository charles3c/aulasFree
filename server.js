const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views',{
    express: server
})

server.use(routes)

server.get('/', (req, res)=>{
    res.render('index')
})


server.listen(process.env.PORT || 5000)