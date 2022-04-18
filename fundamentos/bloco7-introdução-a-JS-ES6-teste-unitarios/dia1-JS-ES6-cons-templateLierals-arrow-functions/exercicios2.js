// 1-Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fat = (num) => {
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado = resultado * i;
  }
  return resultado;
};
console.log(fat(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (test) => {
  let wordArray = test.split(" ");
  let maxLength = 1;
  let result = "";
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
};

console.log(longestWord("Bota fogo na Babilonia, que chegaram os apostolos"));

// 3-Crie uma página que contenha:

// Um botão ao qual será associado um event listener ;

// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const clickCount = 0;
let numCliques = document.getElementById("numeroDeCliques");
const botão = document.getElementById("botão");
function contar() {
  numCliques.innerHTML = clickCount += 1;
}
botão.addEventListener("click", contar);


