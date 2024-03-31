const http = require('node:http') //protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')
//el callback gestiona tanto las request como las respuestas
const server = http.createServer((req, res) => {
    //en el navegador no llegan los console.log que se ejecutan en el servidor
    console.log('request received')
    //termina la comunicacion
    res.end('Hola Mundo')
})

//el puerto 0 automaticamente busca el primer puerto disponible
findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    })
})