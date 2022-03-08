const a = 45;
const b = 80;
const c = -55;

const somaDosAngulos = a + b + c;

if (a < 0 || b < 0 || c < 0){
    console.log("erro")
}
else if (somaDosAngulos === 180){
    console.log("true")
}
else {
    console.log(false)
}