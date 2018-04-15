// function saludar() {
//     return 'Hola Mundo';
// }


// Con una sola línea no hacen falta las llaves. El return va implícito...
let saludar = () => 'Hola Mundo';

console.log(saludar());

// Cuidado cuando utilizamos funciones de flecha haciendo referencia a métodos en objetos ya que el this apunta a la referencia de la variable dentro del objeto window o globals...