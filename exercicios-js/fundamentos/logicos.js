function compras(trabalho1, trabalho2) {
    const comprarSovete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //biwise xor
    const comprarTv32 = trabalho2 != trabalho1
    const manterSaudavel = !comprarSovete // operador unário

    return {comprarSovete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))