'use strict'

var mongoose = require('mongoose');
var schemaProject = mongoose.Schema;

var opcSchema = schemaProject({
    userId: String ,
    idProject: String,
    topic: String,
    dataTopic:String,
    date: String  

}
);

module.exports = mongoose.model('dataset', opcSchema);
// projects = nombre del esquema que tenemos en la base de datos