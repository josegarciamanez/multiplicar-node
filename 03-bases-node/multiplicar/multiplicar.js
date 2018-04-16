const fs = require('fs')
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('========================='.green);
    console.log(`Tabla del ${base} con límite ${limite}`.red);
    console.log('========================='.green);
    for (let mult = 0; mult <= limite; mult++) {
        console.log(`${base} * ${mult} = ${base * mult}`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }
        let data = ''

        for (let mult = 0; mult <= limite; mult++) {
            data += `${base} * ${mult} = ${base * mult}\n`
        }

        fs.writeFile(`./tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-limite-${limite}.txt`)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}