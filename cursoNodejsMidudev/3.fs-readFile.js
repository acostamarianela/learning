//esto es para leer el fichero 
const fs = require('node:fs')

//nos devuelve un buffer de memoria, por lo tanto le pedimos que lo codifique para que lo entendamos
console.log('leyendo el primer archivo')
//se utiliza como 3er parametro un callback
//ya no es necesario asignar
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log('--------> hace cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text)
})

//no podemos saber en que orden nos va a llegar