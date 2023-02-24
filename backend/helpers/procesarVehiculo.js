const procesarVehiculo = ({ modelo, dia, precio = 200000 }) => {
    let aumento = 0;
    if (modelo <= 1997) aumento += precio * 0.2
    if (dia % 2 == 0) aumento += precio * 0.05
    return precio + aumento
}


export {
    procesarVehiculo
}