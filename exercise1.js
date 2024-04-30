
//funcion para la operacion
function numbers (number1,number2) {
    let sum = number1 + number2
    let subtract = number1 - number2
    let multiplication = number1 * number2
    let division = number1 / number2

} numbers()
//realiza operacion
function numericalOperations (number1,number2){
//verifica si los argumentos son numeros
    if (!validateNumbers(number1,number2)){
        return "Ambos valores deben ser numeros"
    }
}
//realizar todas las operaciones
let sum = sum(number1,number2);
let subtract = subtract(number1,number2);
let multiplication = multiplication(number1,number2);
let division = division(number1,number2);
//construir mensajes con los resultados
let mensaje = "sum: "+ sum + ", subtract: "+ subtract + ", multiplication: " + multiplication + ", division: "+ division;
return mensaje;




