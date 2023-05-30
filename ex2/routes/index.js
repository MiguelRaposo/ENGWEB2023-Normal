var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas")
    .then(dados=>{
      res.render('listaDB', { plantas: dados.data });
    })
    .catch(erro=>{
    
      res.render('error', { error: erro,message:"Erro a obter lista de plantas" });
    })
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('perfil', { plantas: dados.data });
      })
      .catch(erro=>{
    
      })
});

module.exports = router;
