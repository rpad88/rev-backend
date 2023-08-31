const { routesFromProduct } = require('./products.routes')
const { routesFromUser } = require('./users.routes')

const { Router } = require('express')

const routes = new Router()

routes.use('/api', [
    routesFromUser(),
    routesFromProduct()
])

module.exports = routes