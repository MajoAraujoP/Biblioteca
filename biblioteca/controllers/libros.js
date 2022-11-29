const express = require('express')
const router = express.Router();
const models = require("../server/models");
const Libros = models.libros

router.get('/',async (req,res)=>{
    
    Libros.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
})

router.post('/', async (req, res) => {
    Libros.create({
        usuarioId: req.body.usuarioId,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        autor: req.body.autor,
        fechaInPrestamo: req.body.fechaInPrestamo,
        fechaFinPrestamo: req.body.fechaFinPrestamo
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    })  
})

router.put('/:id', (req,res) => { 
    Task.update({ 
        usuarioId: req.body.usuarioId,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        autor: req.body.autor,
        fechaInPrestamo: req.body.fechaInPrestamo,
        fechaFinPrestamo: req.body.fechaFinPrestamo }, {
        where: {
            usuarioId: Libros.usuarioId,
            nombre: Libros.nombre,
            categoria: Libros.categoria,
            autor: Libros.autor,
            fechaInPrestamo: Libros.fechaInPrestamo,
            fechaFinPrestamo: Libros.fechaFinPrestamo
        }
        .catch(err => {
            res.status(500).send(err);
    })
    })
})

module.exports = router
