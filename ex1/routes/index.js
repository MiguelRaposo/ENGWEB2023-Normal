var express = require('express');
var router = express.Router();
var Plantas = require('../controler/plantas')

/* GET home page. */
router.get('/plantas', function(req, res, next) {
  
  if(req.query.especie){
    Plantas.getPlantasEspecie(req.query.especie)
      .then(plantas=>{
        res.json(plantas)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de Plantass",error:erro })
      })
  }
  if(req.query.implantacao){
    Plantas.getPlantasImpla(req.query.implantacao)
      .then(plantas=>{
        res.json(plantas)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de Plantass",error:erro })
      })
  }
  else{
    Plantas.list()
      .then(plantas=>{
        res.json(plantas)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de Plantass",error:erro })
      })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  Plantas.getFreguesias()
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de Fregesias",error:erro })
    })
});

router.get('/plantas/especies', function(req, res, next) {
  Plantas.getEspecie()
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(601).json({ message: "Erro a obter lista de Fregesias",error:erro })
    })
});

router.get('/plantas/:id', function(req, res, next) {
  Plantas.getPlantas(req.params.id)
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter Plantas",error:erro })
    })
});

router.post('/plantas', function(req, res, next) {
  Plantas.addPlantas(req.body)
    .then(plantas=>{
      res.status(201).json(plantas)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar Plantas",error:erro })
    })
});



router.put('/plantas/:id', function(req, res, next) {
  Plantas.editPlantas(req.params.id,req.body)
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(604).json({ message: "Erro a atualizar Plantas",error:erro })
    })
});

router.delete('/plantas/:id', function(req, res, next) {
  Plantas.deletePlantas(req.params.id)
    .then(plantas=>{
      res.json(plantas)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar Plantas",error:erro })
    })
});

module.exports = router;
