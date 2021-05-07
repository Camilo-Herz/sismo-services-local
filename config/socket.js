const io = require("socket.io-client");
const socket = io("https://sismo-service.herokuapp.com", {
    reconnection: true,
    autoConnect: true,
    query: {
        nameRoom: '0c62d543a2'
    },
    extraHeaders: {}
});


const webSocket = {
    conectionSocket: () => {
        socket.on("event", (res) => {
            // datos recibidos
            console.log('datos recibidos: ', res);
        });
    },
    emitSocket: (req) => {
        socket.emit("event", {
            userId: "606f1023bfb4bf0c62d543a2",
            idProject: "780",
            topic: "POPO",
            dataTopic: req,
            date: new Date()
        });   
    }
}

module.exports = webSocket;