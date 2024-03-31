import { readFile } from "node:fs/promises"

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer txt', text)
    console.log('segundo txt', secondText)
})

//esto es mas rapido, 2 trabajos en paralelo
//lee los 2 y cuando termina de leer los 2 continua 
//primer se visualiza el primero y segundo el segundo