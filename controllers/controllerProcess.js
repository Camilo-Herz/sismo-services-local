'use strict'

var controller = {

    postProject: (req, res) => {
        res.send({
            status: 1,
            payload: {
                proceso: 'algun proceso'
            }
        });
    }
}

module.exports = controller;