const { INTEGER, STRING } = require('sequelize')
const { connection } = require('../database/connection')
const { Cart } = require('../models/Cart')
const { encryptPassword } = require('../utils/functions')

const User = connection.define('users', {
    userId:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false
    },
    password: {
        type: STRING,
        allowNull: false
    }
}, {undescored: true, paranoid: true, hooks: {
    beforeCreate: encryptPassword
} })

Cart.belongsTo(User, {foreignKey : 'user_id'})
User.hasMany(Cart,{foreignKey : 'user_id'})

module.exports = { User }