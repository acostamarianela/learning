function sum(a,b){
    return a+b
}
//CommonJs Module Export
//para exportar el modulo: 
//module es otra variable global
module.exports = sum
/*
otra forma de exportar es pasando la funcion 
como objeto
module.exports = {sum}
*/ 