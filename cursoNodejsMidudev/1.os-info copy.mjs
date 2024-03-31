//ya no es recomentable utilizar el nombre del modulo nativo ('os'), se utiliza el prefijo node
//el os nos da info de nuestro sistema operativo
//nos permite hacer una aplicacion peque;a y util con ndodejs
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
// o tambien para importar todas las funciones podemos poner directamente import os from 'node:os'

console.log('Informaci[on del sistema operativo')
console.log('----------------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus()) //<--- con esto vamos a poder escalar procesos en Node
console.log('Memoria Libre', freemem() / 1024 / 1024)
console.log('Memoria Total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)