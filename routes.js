const { Router } = require('express')
const routes = Router()

routes.get('/', (req, res)=>{
    res.render('teachers')
})

routes.get('/students', (req, res)=>{
    res.render('estudents')
})

module.exports = routes