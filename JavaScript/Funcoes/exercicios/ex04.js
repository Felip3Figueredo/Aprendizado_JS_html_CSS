// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores

function divisaoEResto(dividendo, divisor){
    divisao = dividendo / divisor
    resto = dividendo % divisor
    console.log(`A divisão de ${dividendo} e ${divisor} é igual a ${divisao}, com resto ${resto}`)    
}


console.log(divisaoEResto(4, 2))
console.log(divisaoEResto(5, 2))