// ALGORITMO CONDICIONAL

let entry1, entry2, num1, num2, resultado;

entry1 = prompt("Inserte un primer número", "0");
num1 = parseInt(entry1);

entry2 = window.prompt("Inserte un segundo número", "0");
num2 = parseInt(entry2);

if (num1 > num2) {
    resultado = "el primero";
} else {
    resultado = "el segundo";
}
document.write(` <h3>De los números que insertó, el mayor es ${resultado}.</h3> `);

alert("Su resultado se presentará al final de la página")

// FIN ALGORITMO CONDICIONAL


// ============================================================================


// Arrays 

class hardware {
    constructor(nombre, categoria, fabricante, precio, disponibilidad) {
        this.nombre = nombre
        this.categoria = categoria
        this.fabricante = fabricante
        this.precio = precio
        this.disponibilidad = disponibilidad
    }
    habilitar() {
        let error = "libro disponible"
        if (this.disponibilidad == false) {
            this.disponibilidad = true
        } else {
            console.log(error)
        }
    }



}

const dispositivos = []

let hardware1 = new hardware("OculusQuest", "VRdevice", "Meta", "300", true)
let hardware2 = new hardware("OracleVR", "VRDevice", "Oracle", "900", false)
let hardware3 = new hardware("OculusQuest2", "VRDevice", "Meta", "599", true)

dispositivos.push(hardware1, hardware2, hardware3)


// Para habilitar los que estan en false
hardware2.habilitar()

console.log(hardware2)

// Filtro por precio
let preciomayor899 = dispositivos.filter(hardware => hardware.precio > 899)

console.log(preciomayor899)
























// TYPEWRITER HECHO EN EL MODULO DE DESARROLLO WEB

const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('Los mejores talentos de la región')
    .pauseFor(700)
    .start();