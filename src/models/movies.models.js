const { DataTypes } = require('sequelize') //? asignar el tipo de dato en la db

//? Importamos la bd
const db = require('../utils/database')

//? Nombre de la tabla es movies
//? columnas id, name, genre, duration
const Movies = db.define('movies', {
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    releaseDate:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'release_date'
    }    
})

module.exports = Movies