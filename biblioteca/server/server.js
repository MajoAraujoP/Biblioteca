const express = require('express');
const librosRoutes = require('../controllers/libros');
const app = express();


app.use(express.json())


app.use('/libros', librosRoutes)


app.listen(8000, () => {
    console.log('...')
})
