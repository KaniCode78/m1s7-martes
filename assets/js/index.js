console.log("Entro index.js");

// let nombre = "Angel Daniel";

// console.log(`Hola mi nombre es ${nombre}`);

// let nombre2 = "Pedro";

// console.log(`Hola mi nombre es ${nombre2}`);

function saludarMensaje(name) {
    let apellido = "Menchaca";
    return `Hola mi nombre es ${name}, buenos dias`;
}

// console.log(saludarMensaje("Daniel"));
// console.log(saludarMensaje("Pedro"));

let nombres = [
    "Daniel",
    "Pedro",
    "Emmanuiel",
    "Adriana",
    "andres"
];

console.log(nombres);
console.log(nombres[2]);

let numbers = [
    "1",
    "2",
    "3",
    "4",
    "5"
];

console.log(numbers);
console.log(numbers[2]);

// console.log(`La cantidad de elementos en nombres es: ${nombres.length}`);
// console.log(`La cantidad de elementos en numeros es: ${numbers.length}`);

let paises = ["Afghanistan",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Austria",
"Azerbaijan",
"Bahamas (the)",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Vanuatu",
"Venezuela (Bolivarian Republic of)",
"Viet Nam",
"Virgin Islands (British)",
"Virgin Islands (U.S.)",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia"];

// console.warn(paises);

// paises.push("Mexico");

// console.log(paises);
// paises.pop();
// console.warn("Esto es un warning");
// console.error("Esto es un error");
// console.table(paises);



//borrar con pop


// paises.unshift("Canada");
// paises.shift();
// paises.splice(10,1);
// paises.splice(10,5);
// paises.splice(0,1, "test");
// paises.splice(20,3);

// console.table(paises);

paises.push("Narnia");
paises.sort().reverse;

console.log(paises);


