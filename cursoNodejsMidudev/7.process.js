// process: obj global que proporciona info y control sobre el proceso actual de ejecucion
//por ej: argumentos de entrada
//console.log(process.argv) //nos permite configurar cualquier cosa que hagamos 

//controlar el proceso y su salida
//con 0 todo fue bien y con 1 hubo algun error
//process.exit(0)

//podemos controlar eventos del proceso
//process.on('exit', () => {
    //cuando salga que limpie la consola, o los recursos
//})


//current working directory
console.log(process.cwd())

//console.log(process.env.PEPITO)