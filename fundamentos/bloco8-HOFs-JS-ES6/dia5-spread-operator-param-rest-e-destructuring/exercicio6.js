
// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal.

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaiixo.

const toObject = ( [ first, second, third ] ) => {
    return {
        name: first,
        marca: second,
        ano: third
    }
}

console.log(toObject(chiron))

// refatoração de acordo com o gabarito: 

const toObject2 = ( [nome, brand, year] ) => ({ nome, brand, year});

console.log(toObject2(shelbyCobra));

// na refatoração a vantagem é usar a abreviação ao setar os parametros com o mesmo nome das chaves que voce quer dar ao objeto, dessa forma o JS automaticamente lê os mesmos nomes e constroi o objeto com chaves e valores iguais. A utilização de array destructuring faz com que os valores do objeto construido fiquem dinamicos, mudando de acordo com o parametro passado.