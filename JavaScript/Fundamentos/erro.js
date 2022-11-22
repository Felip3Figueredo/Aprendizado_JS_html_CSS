function tratarErroLancar (erro) {
    // throw new Error('Deu erro')
    // throw 10
    // throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado (obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroLancar(e)
    } finally {
        console.log('Finally sempre sera executado')
    }
    
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)