const fs = require('node:fs')

//readdir lee los directorio, en este caso lee el actual
//en los callbacks el error es siempre el primer parametro
fs.readdir('.', (err, files) => {
    if(err){
        console.error('Error al leer el directorio: ', err)
        return;
    }
    
    files.forEach(file => {
        console.log(file)
    })
})