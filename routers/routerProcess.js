'use strict'

var express = require('express');
var projectController = require('../controllers/controllerProcess');

var routes = express.Router();

routes.post('/testPost/', projectController.postProject);

module.exports = routes;