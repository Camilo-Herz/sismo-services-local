'use strict'

var modelOPC = require('../models/modelDataOPC');

var controller = {

    guardarDatosOPC: (req, id) => {

        var project = new modelOPC();

        project.idSensor = 1234;
        project.dato = req;
        project.proyecto =  'Pasteurizadora';

        // guardar en la base de datos
        project.save((err, data) => {
            if (err) console.log('error al guardar el documento', err);
            if (!data) console.log('no se a podido guardar');
            console.log('Datos opc-ua enviados a mongo: ', req);
        });
    }
}

module.exports = controller;