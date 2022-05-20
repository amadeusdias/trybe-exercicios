
// 🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
//  Dica: use object destructuring.

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo
  const filtroNacionalidade = (obj) => {
      return obj.filter(({ nationality, bornIn }) => nationality === 'Australian' && bornIn <= 1999
     );
  }
  
// se você precisa filtrar um array de objetos a partir de alguma propriedade especifica deve setar essas propriedades como parametros  da função filtro. De forma que eles serão sempre buscados e manipulados caso existam dentro do array deobjetos que voce esta iterando. 

  console.log(filtroNacionalidade(people));