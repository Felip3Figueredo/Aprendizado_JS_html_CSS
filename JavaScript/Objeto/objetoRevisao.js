// coleçao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco:{
            logadouro: 'Rua ABC',
            numero: 123
        },
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function (){}
}

// Acessando atributos
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logadouro'] = 'Av Gigante'
console.log(carro)

// Deletando Funções

console.log('-------------------------------------------------------')

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)