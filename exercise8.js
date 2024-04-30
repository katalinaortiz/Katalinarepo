function countCharacters(chain) {
    // Inicializamos contadores para letras, números y espacios
    let letter = 0;
    let numbers = 0;
    let spaces = 0;

    // Recorremos cada carácter de la cadena
    for (let i = 0; i < chain.length; i++) {
        // Convertimos el carácter a su código ASCII
        let charCode = chain.charCodeAt(i);

        // Comprobamos si el carácter es una letra (mayúscula o minúscula)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            letter++;
        }
        // Comprobamos si el carácter es un número
        else if (charCode >= 48 && charCode <= 57) {
            numbers++;
        }
        // Comprobamos si el carácter es un espacio
        else if (charCode === 32) {
            spaces++;
        }
    }

    // Retornamos un objeto con la cantidad de letras, números y espacios
    return {
        letter: letter,
        numbers: numbers,
        spaces: spaces
    };
}