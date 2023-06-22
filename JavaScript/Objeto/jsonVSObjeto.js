// Convertendo Objeto em Json
const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

// Convertendo Json em Objeto

// console.log(JSON.parse("{ a: 1, b:2, c: 3}"))
// console.log(JSON.parse("{ 'a': 1, 'b':2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b":2, "c": 3}'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e":[] }'))