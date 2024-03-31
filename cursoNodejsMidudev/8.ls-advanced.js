const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors') //dependencia de produccion

//podemos pasarle la carpeta en la que queremos hacer el list, 1ra posicion es node, la segunda es el fichero
const folder = process.argv[2] ?? '.' //por defecto es el punto

async function ls(directory){
    let files
    try{
        files = await fs.readdir(folder)
    } catch{
        console.error(pc.red(`No se pudo leer el directorio ${folder}`))
        process.exit(1)
    }

    //vamos a crear todas las promesas de todos los archivos
    const filesPromises = files.map(async file => {
        //queremos recuperar info de cada archivo
        const filePath = path.join(folder,file)
        let stats
        try{
            stats = await fs.stat(filePath) //status - info del archivo
        } catch{
            console.error(`No se pudo leer el directorio ${filePath}`)
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size
        const fileModified= stats.mtime.toLocaleString()

        return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)