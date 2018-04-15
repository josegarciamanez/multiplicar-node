let persona = {
    nombre: 'Jose',
    apellidos: 'García Máñez',
    pais: 'España',
    empresa: 'generalitat valenciana'
}

// metemos cada una de las propiedades y metodos del objeto en una variable con una sola línea. Podemos renombrar la variable con la sintaxis nombre: nuevoNombre
let { nombre: miNombre, apellidos: misApellidos, pais: miPais, empresa: miEmpresa } = persona

// Hademos referencia a la variable con el nuevo nombre que le asignamos
console.log(miNombre, misApellidos, miPais, miEmpresa)