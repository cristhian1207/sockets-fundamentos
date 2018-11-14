var socket = io();
//Escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor.');
});
//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Cristhian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta Server:', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})