//funcion para determinar si un año es bisiesto o no
function elapse(year) {
    //verificar si el año es divisible por 4
    if (year % 4 === 0){
        //si es divisible por 100, tambien debe ser divisible por 400 para ser bisiesto
        if (year % 100 === 0){
            return year % 400 === 0;
        } 
        return true;
}
return false;
}