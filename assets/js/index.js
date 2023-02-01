console.log("Entro index.js");

let mascota = {
    nombre: "Firulais",
    edad: 4,
    color: "Cafe",
    raza: "Labrador",
    peso: 8,
    vacunas: ["Vacuna 1", "Vacuna 2"]
}

console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota);
console.log(mascota.vacunas[0]);
console.log(mascota["vacunas"][1]);
console.log(mascota.vacunas);

const colors = [
    { name: 'Red', code: '#ff0000' },
    { name: 'Green', code: '#00ff00' },
    { name: 'Blue', code: '#0000ff' },
    { name: 'Yellow', code: '#ffff00' },
    { name: 'Purple', code: '#800080' }
]

// console.log(colors[2]);

colors[1].spanish ="verde"
console.log(colors[1].spanish);
console.log(colors);

// quiero una funcion que reciba un arreglo(?) e imprima el arreglo, 
// filtrando o buscando el color mandado//

function filtrarColor(arreglo, color){
    let arregloFiltrado = arreglo.find(item =>{
       return item.name == color;
    });

    return arregloFiltrado;
}

console.log(filtrarColor(colors,"Blue"),"colores filtrados");


let employeesWithSalary = [
    {
        name: "Jesus Cardenas",
        age: 32,
        position: "Manager",
        salary: 500
    },
    {
        name: "Manuel Martinez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Carlos Perez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Arturo Lopez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Juan Hernandez",
        age: 27,
        position: "Developer",
        salary: 300
    },
    {
        name: "Bob Johnson",
        age: 35,
        position: "Designer",
        salary: 300
    },
    {
        name: "Emily Davis",
        age: 29,
        position: "QA Engineer",
        salary: 300
    },
    {
        name: "William Brown",
        age: 31,
        position: "Product Manager",
        salary: 300
    }
];

function filtrarTrabajo(empleados){
    let arregloFiltrado2 = empleados.filter(empleado => {
        return empleado.position == "Developer"
    });
    return arregloFiltrado2;
}

console.log (filtrarTrabajo(employeesWithSalary))