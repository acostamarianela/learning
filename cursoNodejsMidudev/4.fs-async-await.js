const { readFile } = require( "node:fs/promises")

//aqui vamos a tener una funcion autoinvocable

;(
    async()=> {
        console.log('leyendo el primer archivo')


        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer txt', text)

        console.log('--------> hace cosas mientras lee el archivo')

        console.log('leyendo el segundo archivo')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo txt', secondText)
    }

)() //la invocamos justo cuando la creamos, esto se llama: IIFE: Inmediatly Invoked Function Expression
//es una funcion anonima





