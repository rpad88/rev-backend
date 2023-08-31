 const { INTEGER } = require('sequelize')
const { connection } = require('../database/connection')

 const ProductCart = connection.define('productscarts', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productId: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: 'products'
            }
        }
    },
    cartId: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: {
                tableName: 'carts'
            }
        }
    }
 }, {underscored: true, paranoid: true})
 

 module.exports = { ProductCart }