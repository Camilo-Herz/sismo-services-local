'use strict'

var express = require('express');
var projectController = require('../auth/auth.controller');

var routes = express.Router();

routes.post('/testPost/', projectController.postProject);

module.exports = routes;