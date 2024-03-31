const path = require('node:path')

//unir rutas con path.join
console.log(path.sep) // barra separadora de carpetas segun el SO

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//basename me da el nombre del fichero
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

//aca le quita el .txt
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

//me devuelve solo la extension
const extension = path.extname('image.jpg')
console.log(extension)