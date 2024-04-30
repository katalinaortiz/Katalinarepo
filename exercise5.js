// funcion para calcular el factorial de un numero entero positivo
function factorial(number){
    //verificar si el numero es negativo
    if (number < 0){
        return "no s epuede calcular el factorial de un numero negativo";
    }
    //iniciar el factorial como 1
    let result = 1;
    // calcular el factorial
    for (let i = 2; i <= number; i++){
        result *= i;
    }
    // retornar el resultado del factorial
    return result;
}