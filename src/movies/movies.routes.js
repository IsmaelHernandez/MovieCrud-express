//?Importamos router
const router = require('express').Router()

//? Este es el prefijo: /movies
router.get('/')
router.post('/')

router.get('/:id')
router.delete('/:id')
router.patch('/:id')
router.put('/:id')

module.exports = router