// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    const temperatura = getMarsTemperature();
    setTimeout(() => console.log(`Mars temperature is: ${temperatura} degree Celsuis`), messageDelay());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// Setar a função getMarsTemperature dentro da função send como uma const, de forma a executar ela dentro da função e poder joga-la dentro do console.log e o setTimeOut. Não adianta jogar a função getMars como um param e querer  