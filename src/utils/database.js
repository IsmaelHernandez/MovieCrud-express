//? Aqui se genera la conexion a BD
const { Sequelize } = require('sequelize')



const db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    username:'postgres',
    password:'root',
    database:'movies_crud'
})

module.exports = db