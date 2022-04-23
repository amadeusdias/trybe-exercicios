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
  