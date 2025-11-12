var peter = {
    name: 'Peter'
}
/*  Esto seria una manera
peter['salute'] = function(to) {
    return 'Hello, ' + to + '!'
*/

/*
peter.salute = function(to) {
    return peter.name + ': Hello, ' + to + '!'
}
*/

// ahora usamos la variable "this" , sirve para tener un objeto ligado a un funcion y no un nombre ligado a una funcion
peter.salute = function(to) {
    return this.name + ': Hello, ' + to + '!'
}

var petro = peter

petro.name = 'Petro'

peter = undefined

console.log(petro.salute('Wendy'))
// Peter: Hello, Wendy!

console.log(petro.salute('James'))
// Peter: Hello, James!

var wendy = {
    name: 'Wendy'
}

wendy.salute = petro.salute

console.log(wendy.salute('Petro'))
// Wendy : Hello, Petro!

console.log(wendy.salute('James'))
// Wendy : Hello, James!

var james = {
    name: 'James'
}

james.salute = petro.salute

console.log(james.salute('Petro'))
// James : Hello, Petro!

console.log(james.salute('Wendy'))
// James : Hello, Wendy!



/*

STACK 
  name       value
--------------------------
peter         @1

HEAP
ref           value
--------------------------
@1       { name: 'Peter'}
@2         f (to) { ... }

*/