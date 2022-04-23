const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const entregadora = order.order.delivery.deliveryPerson;
    const rua = order.address.street;
    const numeroCasa = order.address.number;
    const ap = order.address.apartment;
    const clientName = order.name;
    const clientNumber = order.phoneNumber;
    console.log(`Olá ${entregadora} , entrega para: ${clientName}, Telefone: ${clientNumber}, R: ${rua}, N: ${numeroCasa}, AP: ${ap}`)  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const name = order.name = 'Luiz Silva';
    const valor = order.payment.total = 50;
    const food = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type;
    console.log(`Olá ${name}, o total do seu pedido de ${food[0]}, ${food[1]} e ${drink} é de ${valor}`)
  
  }
  
  orderModifier(order);


  //   1-Agora você vai fazer alguns exercícios de fixação.

  // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  // Note que o parâmetro da função já está sendo passado na chamada da função.

//  2-  Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

// Modifique o nome da pessoa compradora.

// Modifique o valor total da compra para R$ 50,00.
