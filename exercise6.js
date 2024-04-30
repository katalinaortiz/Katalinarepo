//funcion para determinar si un numero es primo
function Isqueeze(number) {
    // verificar si el numero es mneor o igual a 1
    if (number <= 1) {
        return false;
    }
    // verificar si el numero es divisible por algun numero menor que el mismo
    for (let i = 2; i <= Math,sqrt(number); i++){
        if (number % i == 0) {
            return false;
        }
    }
    // si el numero no es divisible por ningun numero menor que el mismo, es primo
    return true;
}