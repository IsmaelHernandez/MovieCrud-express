//? Aqui se genera la conexion a BD
const { Sequelize } = require('sequelize')
//? importamos el config
const config = require('../config')



const db = new Sequelize({
    dialect:'postgres',
    host:config.db.localhost,
    username:config.db.username,
    password: config.db.password,
    database: config.db.name
})

module.exports = db