//con las promoesas ya no nos tenemos que preocupar por usar callbacks
const fs = require('node:fs/promises')

//nos devuelve un buffer de memoria, por lo tanto le pedimos que lo codifique para que lo entendamos
console.log('leyendo el primer archivo')

//ya no es necesario asignar
fs.readFile('./archivo.txt', 'utf-8')
//cuando readFile se devuelva y se resuelve la promesa, entonces: 
    .then(text => console.log(text))

console.log('--------> hace cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => console.log(text))
