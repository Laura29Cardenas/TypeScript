import mostrarEstudiante from "./mostrarEstudiante";
import { Estudiante } from "./tipos";

//Definir variables de tipo dado
const e1: Estudiante = {
    nombre: "Laura",
    apellido: "Cardenas",
    addresses : [
        {
            street : "Siempre viva",
            numero: 34,
            city: "Bogotá"
        },
        {
            street : "Siempre viva",
            numero: 23,
            city: "Bogotá"
        },
        {
            street : "Siempre viva",
            numero: 57,
            city: "Bogotá"
        }
    ]
}

const e2: Estudiante = {
    nombre: "Camila",
    apellido: "Avila",
    addresses : [
        {
            street : "Rincon",
            numero: 72,
            city: "Cali"
        },
        {
            street : "Feria flores",
            numero: 56,
            city: "Medellin"
        },
        {
            street : "Norte",
            numero: 12,
            city: "Tolima"
        }
    ]
}
// console.log(e2)

// Función para mostrar estudiante
// function mostrarEstudiante(estudiante: Estudiante) {
//     console.log(`Nombre: ${estudiante.nombre}, Apellido: ${estudiante.apellido}, Edad: ${estudiante.edad}`);
// }
//llamar al metodo "mostrarEstudiante"
//para mostrar la info del estudiante


//Crear arreglo para almacenar estudiantes:
let arregloEstudiantes: (number | string | Estudiante)[] = [];
//agregar primeros elementos
arregloEstudiantes.push(2);
arregloEstudiantes.push("Jorge")
arregloEstudiantes.push("Carlos")
arregloEstudiantes.push(3);


//Metodo para agregar un estudiante:
const addEstudiante = (e : Estudiante)=> {
    arregloEstudiantes.push(e)
}

//recorrer el arregloEstudiantes
//mostrando solo los estudiantes
arregloEstudiantes.forEach((elemento) => {
    // Condicional para determinar si en elemento existe un objeto de tipo Estudiante
    if (typeof elemento === "object" && elemento !== null && 'nombre' in elemento && 'apellido' in elemento && 'edad' in elemento && 'addresses' in elemento) {
        mostrarEstudiante(elemento);
    }
});


//Invocar el metodo para agregar el estudiante e1 al arreglo
addEstudiante(e1);
addEstudiante(e2);

mostrarEstudiante(e1);
mostrarEstudiante(e2);

//  console.log(arregloEstudiantes);

//Metodo para agregar un estudiante:
/*function addEstudiantePrincipio(e : Estudiante){
    arregloEstudiantes.unshift(e)
    //Instrucciones para agregar el estudiante
    //al arreglo?
    //
}*/

//Metodo para encontrar un estudiante por nombre y actualizar el apellido
//function actualizarApellidoPorNombre(nombre: string, nuevoApellido: string){
    //const estudiante = arregloEstudiantes.find(e => e.nombre === nombre);
    //if (estudiante) {
     //   estudiante.apellido = nuevoApellido;
    //    console.log(`Apellido de: ${nombre} actualizado por ${nuevoApellido}`)
  //  } 
//}


//Metodo para encontrar los estudiantes que vivan en bogota
//y actualice su edad a 18
/*function actualizarEdadenBogota(nuevaEdad: number) {
    arregloEstudiantes.forEach(estudiante => {
        // Verifica si alguna dirección está en Bogotá
        if (estudiante.addresses && estudiante.addresses.some(address => address.city.trim() === 'Bogotá')) {
            estudiante.edad = 18; // Actualiza la edad a 18
        }
    });
}*/

//Metodo para borrar un estudiante 
//por nombre y apellido
/*function borrarPorNombreYApellido (nombre: string, apellido: string){
    arregloEstudiantes = arregloEstudiantes.filter(estudiante =>
        !(estudiante.nombre === nombre && estudiante.apellido === apellido)
    );
}*/

/*//Metodo para borrar los estudiantes que tengan menos de 18 años y vivan en bogota
function borrarMenoresEnBogota(){
    arregloEstudiantes = arregloEstudiantes.filter(estudiante => {
        const viveBogota = estudiante.addresses?.some(address => address.city === 'Bogotá');
        return !(estudiante.edad < 18 && viveBogota);
    });
}
*/



/*addEstudiantePrincipio(e2)
arregloEstudiantes.push(e1)
console.log("Estudiante agregado correctamente")
console.log(e2)
//console.log(actualizarApellidoPorNombre)

actualizarEdadenBogota(18);



//llamar al metodo
//borrarPorNombreYApellido("Laura", "Cardenas");
//console.log("Estudiantes después de borrar:");
//console.log(arregloEstudiantes);


/*borrarMenoresEnBogota()
console.log("Estudiantes después de borrar menores en Bogotá:");
console.log(arregloEstudiantes);*/