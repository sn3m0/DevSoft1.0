let entry1, entry2, num1, num2, resultado;

dato1 = prompt("Inserte un primer número", "0");
num1 = parseInt(entry1);

dato2 = window.prompt("Inserte un segundo número", "0");
num2 = parseInt(entry2);

if (num1 > num2) {
    resultado = "el primero";
} else {
    resultado = "el segundo";
}
document.write(` <h3>De los números que insertó, el mayor es ${resultado}.</h3> `);

alert("Su resultado se presentará al final de la página")

// FIN ALGORITMO CONDICIONAL


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