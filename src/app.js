const express = require('express');

const db = require('./utils/database')

const initModels = require('./models/initModels')

const app = express()

const port = 8000

//? Para ver si se hizo bien la autenticacion de la BD
db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

//?syncronizacion de las tablas
db.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err))

initModels()

//?Acepte json el proyecto
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Andamos ready!'})
})

//?Config del servidor local
app.listen(port, () => { 
    console.log(`Server started at port ${port}`)
});