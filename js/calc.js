const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const dividr = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("Bienvenido/a a la Calculadora de DevSoft! ");
alert("A continuación, ingresa el número de la operación que deseas realizar. ");

let operacion = prompt("1:Sumar | 2:Restar | 3:Multiplicar | 4:Dividir ")

if (operacion == 1) {
    let numero1 = prompt("Ingrese el primer número a sumar ");
    let numero2 = prompt("Ingresa el segundo número a sumar ");
    resultado = sumar(numero1, numero2);
    document.write(`Tu resultado es ${resultado}`);
} else if (operacion == 2) {
    let numero1 = prompt("Ingrese el primer número a restar ");
    let numero2 = prompt("Ingrese el segundo número a restar ");
    resultado = restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 3) {
    let numero1 = prompt("Ingrese el primer número a multiplicar ");
    let numero2 = prompt("Ingrese el segundo número a multiplicar ");
    resultado = multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else if (operacion == 4) {
    let numero1 = prompt("Ingrese el primer número a dividir ");
    let numero2 = prompt("Ingrese el segundo número a dividir ");
    resultado = dividr(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
} else {
    alert("No marcaste ninguna operación")
}