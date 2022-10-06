//? importamos el modelo movies
const uuid = require('uuid')
const Movies = require('../models/movies.models')

//funcion asyncrona
const getAllmovies = async () => {
    const data = await Movies.findAll()//traer todas las peliculas es un select
    //retornamos el resultado
    return data
}

//se hacen una promesa
getAllmovies()
    .then((response) => console.log(response))
    .catch((err) => console.log(err))

//crear un data en la tabla => es un insert
const createMovie = async (data) => {
    const newMovie = await Movies.create({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        releaseDate: data.releaseDate
    })

    return newMovie
}

createMovie({
    name:'Dr. Strage',
    genre:'Science Fiction',
    duration: 120,
    releaseDate: '2019/07/14'
})
    .then((response) => console.log(response))
    .catch((err) => console.log(err))


//Buscar po id
const getMovieId = async (id) => {
    const data = await Movies.findOne({
        where: {
            id: id
        }
    });//traer por id
    //retornamos el resultado
    return data
}