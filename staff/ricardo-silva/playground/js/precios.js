var precios = [20, 9.99, 12.80, 79.99, 22.30, 2.99, 1.85];


function calcularTotalIva(preciosProductos) {
    var suma = 0
    for(var i=0; i < precios.length; i++) {
        suma += precios[i];
    }
    return suma*1.21;
}

var total = calcularTotalIva(precios);

console.log(total);

