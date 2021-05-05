'use strict'

var mongoose = require('mongoose');
var schemaProject = mongoose.Schema;

var projectSchema = schemaProject({
    name: String,
    description: String,
    version: String
});

module.exports = mongoose.model('SISMO', projectSchema);
// projects = nombre del esquema que tenemos en la base de datos