const fs = require('fs')

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un número`);
            return;
        }
        let data = ''

        for (let mult = 0; mult <= 10; mult++) {
            data += `${base} * ${mult} = ${base * mult}\n`
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })
    })
}

module.exports = {
    crearArchivo
}