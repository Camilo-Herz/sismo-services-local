const io = require("socket.io-client");
const { clientIdFull } = require("../filters");
const clientId = require('../filters').clientId();
const socket = io("https://sismo-service.herokuapp.com", {
//const socket = io("http://localhost:3700", {
    reconnection: true,
    autoConnect: true,
    query: {
        nameRoom: clientId
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
    emitSocket: (req) => {
        socket.emit("event", {
            userId: "606f1023bfb4bf0c62d543a2",
            idProject: "780",
            topic: "Rxdata1",
            dataTopic: req,
            date: new Date()
        });   
    }
}

module.exports = webSocket;