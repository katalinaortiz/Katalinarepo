//funcion para realizar la division por restas sucesivas
function divisionporrests(dividing,divider){
    //verificar si el divisor es cero
    if (divider == 0){
        return "No se puede dividir por cero";
    }
    // iniciar el cociente y el residuo
    let quotient = 0;
    let waste = dividing;
    // realizar restas sucesivas hasta que el residuo sea menor que el divisor
    while (waste >= divider){
        waste -= divider;
        quotient++;
    }
    //retornar el resultado de la division y, si hay residuo, tambien el residuo
    if (waste == 0){
        return "resultado de la division: "+ quotient;
    }else {
        return "resultado de la division: "+ quotient + ", waste: " + waste;
    }
}