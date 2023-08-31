const { Router } = require("express")
const { create, findAllAdm, findOne, remove, restore, buyProduct } = require("../controllers/cart.controller")
const { auth } = require('../middlewares/auth.middleware')

class CartRouter {
    routesFromCart() {
        const cartRoutes = Router()
        cartRoutes.post('/carts', auth, create)
        cartRoutes.get('/carts', auth , findAllAdm)
        cartRoutes.get('/carts/:cartId', auth, findOne)
        cartRoutes.get('/cartsAdm/', auth, findAllAdm)
        cartRoutes.delete('/carts/:cartId/remove', auth, remove)
        cartRoutes.post('/carts/:cartId/restore', auth, restore)
        cartRoutes.post('/carts/buy', auth, buyProduct)

        return cartRoutes
    }
}

module.exports = new CartRouter()