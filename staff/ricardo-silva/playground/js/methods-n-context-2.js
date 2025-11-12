var peter = {
    name: 'Peter'
}

// Agregamos to.name

peter.salute = function(to) {
    return this.name + ': Hello, ' + to.name + '!'
}

var wendy = {
    name: 'Wendy'
}

wendy.salute = peter.salute

var james = {
    name: 'James'
}
james.salute = wendy.salute

console.log(peter.salute(wendy))
// Peter: Hello, Wendy!

console.log(wendy.salute(james))
// Wendy: Hello, James!

console.log(james.salute(peter))
// James: Hello, Peter!

/*

STACK 
  name       value
--------------------------
peter         @1
wendy         @3
james         @4


HEAP
ref           value
--------------------------
@1       { name: 'Peter', salute: @2}
@2         f (to) { ... }
@3       { name: 'Wendy', salute: @2 }
@4       { name: 'James', salute: @2 }

*/