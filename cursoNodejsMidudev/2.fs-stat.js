// File System (fs): Sistema de Archivos
const fs = require('node:fs')

//obtener info de archivo.txt
//sincrono
const stats = fs.statSync('./archivo.txt')
console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbolico
    stats.size, //tama;o en bytes
    )