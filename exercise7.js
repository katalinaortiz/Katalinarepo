// Función para validar un password
function validatePassword(password) {
    // Verificar si el password es nulo o vacío
    if (!password) {
        return "El password no puede estar vacío.";
    }

    // Verificar la longitud mínima y la presencia de letras en mayúscula y números
    function lengthandcontent() {
        if (password.length < 8) {
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            return false;
        }
        if (!/\d/.test(password)) {
            return false;
        }
        return true;
    }

    // Verificar si hay espacios en el password
    function containsSpaces() {
        return /\s/.test(password);
    }

    // Verificar si el password cumple con los criterios
    if (!lengthandcontent()) {
        return "El password debe tener al menos 8 caracteres, una letra en mayúscula y un número.";
    }

    if (containsSpaces()) {
        return "El password no puede contener espacios.";
    }

    // Si pasa todas las validaciones, el password es válido
    return "El password es válido.";
}