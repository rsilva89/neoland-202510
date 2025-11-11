/*
Armando una lista de super

Crea un array vacio que se llame listaDeSuper.
Piensa como le puedes pedir al usuario para que ingrese al menos 5 productos para llenar la lista de super.
Muestra por la consola los productos introducidos por el usuario.
*/

/* Esta es la forma pero vamos a ver otro ejemplo:
var listaDeSuper = [];

for (var i = 0; i < 5; i++ ) {
    // listaDeSuper[i] = prompt('Ingrese producto:  '); esto es una manera
    listaDeSuper.push(prompt('Ingrese producto:  ')); /* Esto es cuando no sabemos que productos tenemos
    
}

console.log(listaDeSuper);
*/

var listaDeSuper = [];

var producto = '';

while (producto !== "stop") {
    producto = prompt("Ingrese producto:  ");
    if (producto !== "stop") {
        listaDeSuper.push(producto);
    } 
}

console.log(listaDeSuper);

/*Este ejemplo es para definir que con la palabra stop, termine la lista y que no salga la palabra stop en la lista */