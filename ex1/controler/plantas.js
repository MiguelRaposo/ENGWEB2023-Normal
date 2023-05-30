var Plantas = require('../models/plantas')

// Plantas list
module.exports.list = () =>{
    return Plantas.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}


module.exports.getPlantas = id =>{
    return Plantas.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlantasEspecie = especie =>{
    return Plantas.find({"Espécie":especie})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlantasImpla = impla =>{
    return Plantas.find({"Implantação": impla})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlantas = id =>{
    return Plantas.findOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getFreguesias = () =>{
    return Plantas.distinct("Freguesia").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getEspecie = () =>{
    return Plantas.distinct("Espécie").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.addPlantas = (plantas) => {
    return Plantas.collection.insertOne(plantas)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.editPlantas = (id,plantas)=>{
    return Plantas.updateOne({_id:id},plantas)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.deletePlantas = id =>{
    return Plantas.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.list2 = () =>{
    return Plantas.find({},{ "Freguesia":1 , "Espécie":1 , "Estado":1 , "Número de intervenções":1 })
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
