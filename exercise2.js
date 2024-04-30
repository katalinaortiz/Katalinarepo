//valida si el nombre esta correcto
function validateName(name){
// verifica si el nombre tiene al menos 2 letras
//y si comienza con una letra mayuscula
return /^[A-Z][a_z]+$/.test(name);
}
//funcion para generar saludo
function generategreeting(name){
    // valida si el nombre cumple con las condiciones
    if (!validateName(name)){
        return "nombre invalido";
    }
    //generar saludo con el nombre
    let greeting = "¡hola, " + name +"!";
    return greeting;
}
