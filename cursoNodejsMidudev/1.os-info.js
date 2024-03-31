//ya no es recomentable utilizar el nombre del modulo nativo ('os'), se utiliza el prefijo node
//el os nos da info de nuestro sistema operativo
//nos permite hacer una aplicacion peque;a y util con ndodejs
const os = require('node:os')

console.log('Informaci[on del sistema operativo')
console.log('----------------------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) //<--- con esto vamos a poder escalar procesos en Node
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria Total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)