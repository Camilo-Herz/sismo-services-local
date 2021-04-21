'use strict'

var modelProject = require('../models/modelInterface');
var viewDataMapping = require('../collection/viewDataMapping');

// Respuestas http
// https://developer.mozilla.org/es/docs/Web/HTTP/Status

var controller = {

    postProject: (req, res) => {

        var project;
        var response;
        switch (req.body.stepId) {
            case 'login':
                project = viewDataMapping.login(req, res);
                response = {
                    status: 1,
                    urlRedir: 'dashboard'
                }
                break;
            case 'newProject':
                project = viewDataMapping.newProject(req, res);
                response = {
                    status: 1,
                    urlRedir: 'dashboard',
                    payload: {}
                }
                break;

            default:
                break;
        }

        // guardar en la base de datos
        project.save((err, data) => {
            if (err) return res.status(404).send({
                status: 2,
                message: 'No se ha podido conectar con la base de datos.',
                labelBtnDerecha: 'Aceptar',
                urlRedir: 'login'
            });
            console.log('Datos front-end enviados a mongo: ', project);
            return res.status(200).send(response);
        });
    },

    getProject: (req, res) => {
        return res.status(200).send({
            message: 'Respuestirijilla, falta consultar la base de datos'
        })
    },

    updateProjects: (req, res) => {
        var idProject = req.params.id;
        var update = req.body;

        // se coloca el parametro {new: true} para que retorne el valor conlos datos editados en la base de datos si es false retorna
        // el valor antes de editarlo
        modelProject.findByIdAndUpdate(idProject, update, { new: true }, (err, data) => {
            if (err) return res.status(500).send({ message: 'error al actualizar' });
            if (!data) return res.status(404).send({ message: 'no se a podido guardar' });
            return res.status(200).send({ project: data })
        })
    },

    deleteData: (req, res) => {
        var idProject = req.params.id;

        modelProject.findByIdAndRemove(idProject, (err, data) => {
            if (err) return res.status(500).send({ message: 'error al borrar' });
            if (!data) return res.status(404).send({ message: 'no se a podido guardar' });
            return res.status(200).send({ project: data })
        })

    },
}

module.exports = controller;