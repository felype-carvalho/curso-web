const pessoa = {
    sadaucao: 'Bom dia',
    falar() {
        console.log(this.sadaucao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
