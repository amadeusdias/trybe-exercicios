//const fetch = require('node-fetch')

// fetchCoins faz a requisição da lista de moedas da API, transforma essa requisição em um objeto json com o primeiro .then, e depois transforma esse objeto json em uma lista legivel com o segundo .then, pois a função json() retorna uma promise. 
// o return coins devolve a lista de moedas cripto, depois de tratar a saida do fetch da API.

const fetchCoins = async () => {
    const ENDPOINT = `https://api.coincap.io/v2/assets`;

    const coins = await fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.tostring());

    return coins;
}

// a set coins usa o await primeiro para esperar a primeira função fazer e rodar a requisição, depois pega o array devolvido por essa lista e usa o metodo forEach para criar um item list para cada moeda em um modelo personalizados, usando os mini metodos do JS. 

// o Number é um constructer de numeros, no caso o numero que vem com o array coins. Ai so resta personalizar a mensagem e colar ela no HTML atraves do DOM, usando AppendChild.

const setCoins = async () => {
    const coins = await fetchCoins();

// setar a variavel que captura o html em que voce vai botar a lista:
const coinList = document.getElementById('cotainerMoedas');

coins
   .filter((coin) => Number(coin.rank) <= 10)
   .forEach((moeda) => {
    const newLi = document.createElement('li');
    const usdPreço = Number(moeda.priceUsd);

    newLi.innerText = `${moeda.name} (${moeda.symbol}): ${usdPreço.toFixed(2)}`;

    coinList.appendChild(newLi);
});
};

window.onload = () => setCoins();