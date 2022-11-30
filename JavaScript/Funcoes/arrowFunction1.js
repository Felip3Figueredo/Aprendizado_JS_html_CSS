// Utilizando Function
let dobro = function (a) {
    return 2 * a
}

// Utilizando arrow (Forma 1)
dobro = (a) => {
    return 2 * a
}

// Utilizando arrow (Forma 2)
dobro = a => 2 * a

console.log(dobro(Math.PI))

// Repitindo o processo

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola' // Possui um param
console.log(ola())
