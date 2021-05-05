'use strict'

var mongoose = require('mongoose');
var schemaProject = mongoose.Schema;

var opcSchema = schemaProject({
    idSensor: Number,
    dato: String,
    proyecto: String
});

module.exports = mongoose.model('PROCESOS-SISMO', opcSchema);
// projects = nombre del esquema que tenemos en la base de datos