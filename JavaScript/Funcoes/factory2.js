function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Vassoura', 57.49))
console.log(criarProduto('iPad', 3500))