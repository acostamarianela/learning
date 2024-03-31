//para importar un modulo 
//CommonJs require module
const sum = require('./sum')
//a la funcion la puedo llamar como yo quiera
/*
pasar como un objeto nos obliga a hacer una 
destructuracion
const {sum} = require('./sum')
*/ 
console.log(sum(1,2))