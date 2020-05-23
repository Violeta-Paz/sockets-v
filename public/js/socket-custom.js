


var socket = io();

// on = escuchar

socket.on('connect', function () {

    console.log('conectado al servidor');

});

socket.on('disconnect', function () {

    console.log('Perdimos la coneccion con el servidor');

});

// emit = emitir, enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Violeta Paz',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('respuesta server:', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function (mensaje) {

    console.log('Servidor:', mensaje);
});
