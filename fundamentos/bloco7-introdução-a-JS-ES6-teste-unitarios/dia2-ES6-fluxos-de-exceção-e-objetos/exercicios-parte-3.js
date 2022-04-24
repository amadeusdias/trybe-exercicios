const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function add(object,key,value) {
  object[key] = value
}
add(lesson2, 'turno', 'noite');
console.log(Object.entries(lesson2))

const list = (obj) => Object.keys(obj);

console.log(list(lesson3));

const listTamanho = (obj) => Object.keys(obj).length;

console.log(listTamanho(lesson3));

const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, {lesson1,lesson2, lesson3});
console.log(allLessons);

function getStudents(lessons) {
  const keys = Object.keys(lessons);
  let total = 0;
  for(let i = 0; i < keys.length; i += 1) {
    const currentKey = keys[i];
    total += lessons[currentKey].numeroEstudantes
    }
    return total;
}
console.log(getStudents(allLessons));

const getValueByNumber = (obj, index) => Object.values(obj)[index]
console.log(getValueByNumber(lesson2, 2));
//a função Object.values retorna um array com os valores do objeto escolhido, ao colocar o [] apos a escrita da função, você seleciona qual dos valores do objeto quer mostrar.
// a função Object.keys também retorna um array com as chaves do objeto. E pode ser acessado da mesma forma. 

function verifyPar(obj, key, valor) {
  const arrei = Object.entries(obj);
  let result = false;
  for(let i = 0; i < arrei.length; i += 1){
  if(arrei[i][0] === key && arrei[i][1] === valor)
  result = true;
}
return result;
}
console.log(verifyPar(lesson1, 'turno', 'manhã'));