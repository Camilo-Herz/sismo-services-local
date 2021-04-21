'use strict'

var mongoose = require('mongoose');
var schemaProject = mongoose.Schema;

var projectSchema = schemaProject({
    clave: String,
    confirmacionClave: String,
    email: String,
    id: String,
    lastName: String,
    name: String,
    profilePicture: String,
    token: String,
    usuario: String
});

module.exports = mongoose.model('users', projectSchema);
