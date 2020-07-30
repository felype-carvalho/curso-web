//Armazenado uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenado uma função arrow em uma varivavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito em unica linha
const subtração = (a, b) => a - b
console.log(subtração(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!")