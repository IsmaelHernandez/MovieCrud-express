//? Importamos router
const router = require('express').Router()
//? importamos los servicios
const movieServices = require('./movies.services')

//? Este es el prefijo: /movies
router.get('/', movieServices.getAllMovies)
router.post('/', movieServices.postMovie)

router.get('/:id', movieServices.getMovieById)
router.delete('/:id', movieServices.deleteMovie)
router.patch('/:id', movieServices.patchMovie)
router.put('/:id', movieServices.putMovie)

module.exports = router