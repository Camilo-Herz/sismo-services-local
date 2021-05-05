var modelLogin = require('../models/modelInterfaceLogin');
var modelNewProject = require('../models/modelInterfaceNewProject');

const dataMapping = {
    login: (req, res) => {
        var req = req.body.payload;
        var project = new modelLogin();

        const domine = req.email.split('@');
        if (domine[1] === 'correo.udistrital.edu.co') {
            project.clave = req.clave;
            project.confirmacionClave = req.confirmacionClave;
            project.email = req.email;
            project.id = req.id;
            project.lastName = req.lastName;
            project.name = req.name;
            project.profilePicture = req.profilePicture;
            project.token = req.token;
            project.usuario = req.usuario;
            return project;
        } else {
            return res.status(203).send({
                status: 2,
                message: 'El correo ingresado no pertenece al dominio de la universidad.',
                labelBtnDerecha: 'Aceptar',
                urlRedir: 'login'
            })
        }
    },
    newProject: (req, res) => {
        var req = req.body.payload;
        var project = new modelNewProject();
        project.nombreProceso = req.nombreProceso;
        project.descripcionProceso = req.descripcionProceso;
        project.topic = req.topics;
        return project;
    }

}

module.exports = dataMapping;