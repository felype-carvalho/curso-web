const escola = "cod3r"

console.log(escola.charAt(3))
console.log(escola.charCodeAt(3)) // pega o valor da possição e devolve o valor em Unicode

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!?"))
console.log('Escola ' + escola + '!!!')
console.log('3' + 2)
console.log("3" / 2)

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(','))