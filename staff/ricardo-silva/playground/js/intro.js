var a;

a = 1;

var b = 2;

var c = a + b;

var d = true;

var e = !d;

var f = a + d;

var g = 'hello';

var h = b + e + g;

var i = b + g + e;

var j;

var k = i + j;

var l = a / 0;

var m = b / d;

var n = c / g;

var o = c * g;

var p = g + g + g;

var q = h - g;

var r = null + f;

var s = f + '' + f;

var t = a * null;

var u = undefined * null;

var v = undefined + c;

var w = m * '' * g;

var x = {};

x['name'] = 'Peter';

var y = x;

y['name'] = 'Wendy';

x['surname'] = 'Darling';

var z = { 'name': 'James' };

y['uncle'] = z; //Wendy tiene como tio a James

z['surname'] = 'Bond';

z['niece'] = x;

x['uncle']['surname'] = 'Hook';

z['niece']['age'] = 13;

y['age'] = y['age'] + 1;

x['age']++;

x['age'] = x['age'] - 4;

y['age'] -= 3;

x['age'] += 1;

// x['uncle']['age'] = 45;
x.uncle.age = 45;

var shelf = {};

shelf['0'] = 'Peter Pan Book';
shelf['1'] = 'Little Red Riding Hood Book';
shelf['2'] = 'The Little Prince Book';
shelf['3'] = 'The Lord of The Rings Book';
shelf['4'] = 'Harry Potter Book';
shelf['5'] = 'The World of Sophia Book';
//shelf.6 = 'The Shinning Book';
//shelf['6'] = 'The Shinning Book';
shelf['6'] = 'The Shinning Book';

//console.log(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, shelf);

/*
console.log(shelf[0]);
console.log(shelf[1]);
console.log(shelf[2]);
console.log(shelf[3]);
console.log(shelf[4]);
console.log(shelf[5]);
console.log(shelf[6]);
*/

/*
var index = 0;

console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
index++
console.log(shelf[index]);
*/

/*
var index = 0;

while (index < 7) {
    console.log(shelf[index]);
    index++;
}

console.log('The End'); */

/*
for (var index = 0; index < 7; index++) {
    console.log(shelf[index]);
}

console.log('The End'); 
*/

var car1 = {
    brand: 'Ford',
    model: 'Fiesta',
    year: 2018,
    registration: 'ABC123'
}

var car2 = {
    brand: 'Ford',
    model: 'Fiesta',
    year: 2018,
    registration: 'DEF456'
}

/*
console.log(car1.brand === car2.brand)
console.log(car1.model === car2.model)
console.log(car1.year === car2.year)
console.log(car1 === car2)
*/

var cars = []

//cars['0'] = car1
//cars[0] = car1
cars[cars.length] = car1
//cars[1] = car2
cars[cars.length] = car2

var car3 = {
    bran: 'Fiat',
    model: '500',
    year: 2024,
    registration: 'PEQ678'
}

//cars[2] = car3
cars[cars.length] = car3

var car4 = {
    bran: 'Citroen',
    model: 'C4',
    year: 2020,
    registration: 'NPI789'
}

cars[7] = car4

//console.log(cars)

var printCar = function(car) {
    var carInfo = car.brand + ' ' + car.model + ' (' + car.year + ', ' + car.registration + ') '

    console.log(carInfo)
}

/*
printCar(car1)
printCar(car2)
printCar(car3)
printCar(car4)
*/

/*
var cart = []

cart[0] = { title: 'Chocolate Milka', price: 2.85, quantity: 4 }
cart[1] = { title: 'Redbull', price: 1.6, quantity: 7 }
cart[2] = { title: 'Champiñones', price: 1.75, quantity: 2.8 }
cart[3] = { title: 'Boniato', price: 2, quantity: 3.1 }

var generateTicket = function(items) {
    var text = 'SuperCoolMarket\n'
    text += '--------------------------------------\n'

    var total = 0

    for (var i = 0; i < items.length; i++) {
        var item = items [i]

        var subtotal = item.quantity * item.price 

        text += item.title + '\t' + item.quantity + ' * ' + item.price + '\t = ' + subtotal + '\n'
    
        total += subtotal
    }

    text += '--------------------------------------\n'

    text += 'Total \t\t\t ' + total + '\n\n'

    text += 'Date \t\t\t ' + new Date().toLocaleDateString()

    return text 
}

var ticket = generateTicket(cart)

console.log(ticket)

console.log('The End');
*/

/* ejemplo de como deberia verse la factura:
SuperCoolMarket
--------------------------------------
Chocolate Milka       4  *  2.85 = ...
Redbull               7  *  1.6  = ...
Champiñones         2.8  *  1.75 = ...
Boniato             3.1  *  2    = ...
--------------------------------------
Total                              ...   

Date                        ../../....
*/

/* 
- Tenemos un array con nombres de personas
- Tenemos que imprimir el nombre de cada persona en la consola (uno debajo de otro)
- Tambien hacer la lista de arriba hacia abajo
*/

var alumnos = []

alumnos[0] = {nombre: 'Juan', edad: 34}
alumnos[1] = {nombre: 'Laura', edad: 30}
alumnos[2] = {nombre: 'Albert', edad: 36}
alumnos[3] = {nombre: 'Jodlin', edad: 45}
alumnos[4] = {nombre: 'Paula', edad: 32}
alumnos[5] = {nombre: 'Manuel', edad: 15}
alumnos[6] = {nombre: 'Jorge', edad: 32}
alumnos[7] = {nombre: 'Sergio', edad: 30}
alumnos[8] = {nombre: 'Rodolfo', edad: 36}
alumnos[9] = {nombre: 'Stephany', edad: 27}
alumnos[10] = {nombre: 'Agustin', edad: 23}
alumnos[11] = {nombre: 'Patricia', edad: 23}
alumnos[12] = {nombre: 'Ibra', edad: 18}

/*
for (var i = 0; i < alumnos.length; i++ ) {
    console.log(alumnos[i])
}
*/

var suma = 0

//ahora vamos a ir de arriba hacia abajo
for (var i = alumnos.length-1; i >= 0; i-- ) {
    console.log( 'Nombre: ' + alumnos[i].nombre.toLowerCase() + ' Edad ' + '(' + alumnos[i].edad + ')' )
    suma += alumnos[i].edad
}

console.log(suma)

console.log('The End');
