const io = require("socket.io-client");
const topic = require('../filters').topics;
const idProject = require('../filters').idProject();
const clientId = require('../filters').clientId();
const clientIdFull = require('../filters').clientIdFull();
const socket = io("https://sismo-service.herokuapp.com", {
//const socket = io("http://localhost:3700", {
    reconnection: true,
    autoConnect: true,
    query: {
        nameRoom: clientId+'@'+idProject
    },
    extraHeaders: {}
});


const webSocket = {
    conectionSocket: () => {
        socket.on("event", (res) => {
            // datos recibidos
           // console.log('datos recibidos: ', res);
        });
    },
    emitSocket: (req,id) => {
        socket.emit("event", {
            userId: "606f1023bfb4bf0c62d543a2",
            idProject: idProject,
            topic: id,
            dataTopic: req,
            date: new Date()
        });   
    }
}

module.exports = webSocket;