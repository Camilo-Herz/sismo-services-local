'use strict'

var mongoose = require('mongoose');
var schemaProject = mongoose.Schema;

var opcSchema = schemaProject({
    idSensor: Number,
    dato: String,
    proyecto: String
},
{
    timestamps: true // guarda la fecha de creacion y de actualizacion
}
);

module.exports = mongoose.model('datasets', opcSchema);
// projects = nombre del esquema que tenemos en la base de datos