// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}
function funa() {}
function funb() {}
function func() {}

// Armazenar em uma variável
const fun2 = function() {}
const funa = function() {}
const funb = function() {}
const func = function() {}

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))
const arraya = [function(a,b) {return a + b}, funa, funb]
const arrayb = [function(a, b) {return a + b}, funa, funb]
const arrayc = [function(a, b) { return a + b}, fun1, funa]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

const obja = {};
obja.falara = function() { return 'Opa' }
console.log(obja.falara())


// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)