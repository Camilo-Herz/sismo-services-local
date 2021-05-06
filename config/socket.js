const io = require("socket.io-client");
const socket = io("http://localhost:3700", {
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
        socket.emit("event", {
            userId: "606f1023bfb4bf0c62d543a2",
            idProject: "780",
            topic: "PH",
            dataTopic: Math.random() * (1000 - 10) + 10,
            date: new Date()
        });
    },
    emitSocket: () => {

    }
}

module.exports = webSocket;