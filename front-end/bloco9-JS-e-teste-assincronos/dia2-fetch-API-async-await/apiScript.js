const fetch = require('node-fetch')

// 1. Como primeiro exercício, vamos usar a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!
// Primeiro, veja o manual da API do site icanhazdadjoke.com. Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:
// Para começar, vamos fazer uma requisição via browser. Visite o site icanhazdadjoke.com, e perceba que ele devolve uma página HTML com uma piada aleatória.
// Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
// Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.
// Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON.
// Perceba que, dependendo do que passamos na chave Accept: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.
// Utilize o HTML e o js a seguir como base: (não se esqueça de utilizar a extensão Live Server e inspecionar o console do navegador para ver os logs)

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObj)
  .then(response => response.json())
  .then(data =>
    document.getElementById('jokeContainer').innerText = data.joke);
};

//data é um objeto com as chaves id e joke, a primeira tem uma id e a segunda a piada correspondente a esse id, essa saida so pode ser vista no navegador. Lembre-se que ao fazer uma fetch a sua resposta, alem de ser uma promise, é, quase sempre, um objeto. 

// em vez de criar um elemento novo para segurar a resposta da função e depois colocar esse elemento dentro do html simplismente pegue o h2 do html corrente e altere seu innerText, colocando o data la dentro. É mais limpo e faz muito mais sentido, ja que o elemento H2 ja esta vazio. 

window.onload = () => fetchJoke();