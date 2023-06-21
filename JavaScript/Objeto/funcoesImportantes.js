const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Obtendo chaves
console.log(Object.keys(pessoa))

// Obtendo valores
console.log(Object.values(pessoa))

// Lista de Registros
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Definir propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

// Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

// Object.freeze
Object.freeze(obj)
obj.c = 1234
console.log(obj)