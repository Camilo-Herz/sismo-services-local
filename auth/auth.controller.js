var controller = {

    postProject: (req, res) => {
        return res.status(404).send({
            status: 2,
            message: 'No se ha podido conectar con la base de datos.',
            labelBtnDerecha: 'Aceptar',
            urlRedir: 'login'
        });

    }
}

module.exports = controller;