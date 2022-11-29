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
