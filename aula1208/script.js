let resultado
let valor1 = prompt("digite o primeiro valor")
let valor2 = prompt("digite o segundo valor")

valor1 = Number(valor1)
valor2 = Number(valor2)

let operação = prompt("digite uma operação: adição = +; subtração = -; multiplicação = *; divisão = /")

if (operação == "+") {
    resultado = valor1 + valor2
    console.log("resultado: " + resultado)

} else if (operação == "-") {
    resultado = valor1 - valor2
    console.log("resultado: " + resultado)

} else if (operação == "*") {
    resultado = valor1 * valor2
    console.log("resultado: " + resultado)

} else if (operação == "/") {
    resultado = valor1 / valor2
    if (valor2 == 0) {
        console.log("não é possivel fazer esse calculo")
    }
    console.log("resultado: " + resultado)
} else {
    console.log("indefinido")
}