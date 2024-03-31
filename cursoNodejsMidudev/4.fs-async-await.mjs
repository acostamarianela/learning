import { readFile } from "node:fs/promises"
//los mjs tienen el soporte de usar await en el cuerpo del archivo

console.log('leyendo el primer archivo')


const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer txt', text)

console.log('--------> hace cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo txt', secondText)

