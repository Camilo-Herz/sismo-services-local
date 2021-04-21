'use strict'

var bodyParser = require('body-parser');

// express es el que nos permite trabajar con las peticiones y respuestas http
var express = require('express');
var app = express();
var server = require('http').Server(app);

// Cargar archivos de ruta
var routes = require('./routers/routerProcess');

// Metodo que se ejecuta antes de la accion de un controlador (middleware)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // cualquier tipo de dato que llegue lo convierte a json

// Configuracion de acceso CORS
// el * significa que puede hacer peticIon cualquier dominio IMPORTANTE COLOCAR LOS QUE QUEREMOS UNICAMENTE
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutas
app.use('/api', routes);

// Export
module.exports = server;
