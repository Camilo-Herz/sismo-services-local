var socket = require('superio')('https://sismo-service.herokuapp.com');

// configuracion del socket
const webSocket = {
    conectionSocket: () => {
        socket.on('connect', function(){
            socket.on('event', function(data){});
            socket.on('disconnect', function(){});
        });
        socket.emit('event', {data: 'Kevin el mejor de SOPHOS'});
    }
}

module.exports = webSocket;