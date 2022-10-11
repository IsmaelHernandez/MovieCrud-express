const { response } = require('express')
const moviesControllers = require('./movies.controller')

//? servicio para obtener las movies
//? los servicos atienden el request y el response
const getAllMovies = (req, res) => {
    moviesControllers.getAllmovies()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            err.status(400).json({ message: err.message })
        })
}

//? servicio de crear una movie
const postMovie = (req, res) => {
    const { data } = req.body;
    if (data.name && data.genre && data.duration && data.releaseDate) {
        moviesControllers.createMovie(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    } else {
        res.status(400).json({ message: 'Missind Data' })
    }
}

const getMovieById = (req, res) => {
    const id = req.params.id

    moviesControllers.getMovieId(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(200).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })

}

//servicio para buscar y editar por id
//Modificacion parcial
const patchMovie = (req, res) => {
    const id = req.params.id
    const { name, genre, duration, releaseDate } = req.body;

    moviesControllers.editMovie(id, { name, genre, duration, releaseDate })
        .then((response) => {
            if (response[0]) {
                res.status(200).json({
                    message: `Movie with ${id}, edited succesfully`
                })
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(error => {
            res.status(404).json({
                message: error.message
            })
        })

}

const putMovie = (req, res) => {
    const id = req.params.id;
    const { name, genre, duration, releaseDate } = req.body
    //? Este if es para validar los datos, y generar error si no vienen todos los necesarios
    if (name && genre && duration && releaseDate) {
        moviesControllers.editMovie(id, { name, genre, duration, releaseDate })
            .then((response) => {
                //? Este if valida si una pelicula existe o no (Valid or Invalid ID)
                if (response[0]) {
                    res.status(200).json({ message: `Movie with ID: ${id}, edited succesfully!` })
                } else {
                    res.status(404).json({ message: 'Invalid ID' })
                }
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    } else {
        res.status(400).json({
            message: 'Missing data', fields: {
                name: 'string',
                genre: 'string',
                duration: 'integer',
                releaseDate: 'YYYY/MM/DD'
            }
        })
    }
}

//
const deleteMovie = (req, res) => {
    const id = req.params.id
    moviesControllers.deleteMovieById(id)
        .then((response) => {
            if (response) {
                res.status(204).json({ message: 'Elimined Movie :)' })
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}


module.exports = {
    getAllMovies,
    getMovieById,
    postMovie,
    patchMovie,
    deleteMovie,
    putMovie
}