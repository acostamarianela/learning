const net = require('node:net')

function findAvailablePort(desiredPort){
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', () => {
            if (error.code === "EADDRINUSE"){
                //o puedo poner dierctamente el 0 para que encuentre el primer puerto disponible
                resolve(findAvalaiblePort(desiredPort + 1).then(port => resolve(port)))
            } else {
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort }