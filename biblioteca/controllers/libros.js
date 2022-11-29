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
router.delete('/:id', (req,res) => {
    const id = req.params.id;
      Libros.destroy({
          where: {
            id:id
          }
        })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "El libro se eliminó con éxito!"
            });
          }else if(num == 0){
            res.status(404).send({
              message: "No se ha encontrado el libro a eliminar"
            });  
          }
      })
        .catch(err => {
          res.status(500).send(err);
      });
  })
  

module.exports = router
