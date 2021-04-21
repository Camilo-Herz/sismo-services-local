'use strict'

var express = require('express');
var projectController = require('../controllers/controllerProcess');

var routes = express.Router();

routes.post('/testPost/', projectController.postProject);
routes.get('/testGet', projectController.getProject);
routes.put('/updateData/:id', projectController.updateProjects);
routes.delete('/deleteData/:id', projectController.deleteData);

module.exports = routes;