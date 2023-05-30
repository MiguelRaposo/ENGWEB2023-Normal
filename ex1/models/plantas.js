var mongoose = require('mongoose');


var plantasSchema = new mongoose.Schema({
        _id: Number,
        numero_de_registo: Number,
        codigo_de_rua: Number,
        rua: String,
        local: String,
        freguesia: String,
        especie: String,
        nome_cientifico: String,
        origem: String,
        data_de_plantação: String,
        estado: String,
        caldeira: String,
        tutor: String,
        implantacao: String,
        gestor: String,
        data_de_actualização: String,
        numero_de_intervencoes: Number
});



module.exports = new mongoose.model('plantas',plantasSchema);