// par nome/valor
const saudacao = 'Opa' // contexto Lexico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto Lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua muito legal',
        numero: 123
    }

}

console.log(saudacao)
console.log(exec())