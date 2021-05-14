// 'use strict'

const mongoose = require('mongoose');
const app = require('./config/app');
const opc = require('./opcUA/opc.dao')
const webSocket = require('./config/socket');
const port = process.env.PORT || 3800;

// ////////////// */ Constantes para la conexion con la base de datos //////////////
const uri = 'mongodb+srv://user-opcua:Camilo1234@conectopcua.h7wtq.mongodb.net/mydatabase?retryWrites=true&w=majority';

// conxion con opcUA - por orden este debe ir primero
opc.f();


mongoose.connect(uri)
    .then(() => {
        console.log('conectado con exito...');
        // creacion del servidor 
        app.listen(port, () => {
            webSocket.conectionSocket();
            console.log('servidor corriendo correctamente');
        })

    }).catch((err) => { console.log('Error: ', err); });
