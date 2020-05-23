
const { io } = require('../server');

io.on('connection' , ( client ) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Que la fuerza te acompañe'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
     //   if( mensaje.usuario ) {
       //     callback({
         //       ok: true,
           //     resp: 'TODO SALIO BIEN'
            //});
        
        //} else {
          //  callback({
          //      resp: 'Ha ocurrido un error!!'
            //});
             
        //};

        
    });

});