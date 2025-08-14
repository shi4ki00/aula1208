let n1, n2, nn1, nn2
let filme1 = {
    nota: n1,
    nome: nn1
}
let filme2 = {
    nota: n2,
    nome: nn2
}
filme1.nome = prompt("digite o nome do primeiro filme")
filme1.nota = prompt("digite a nota do primeiro filme")

filme2.nome = prompt("digite o nome do segundo filme")
filme2.nota = prompt("digite a nota do segundo filme")

console.log("O primeiro filme é "+ filme1.nome +" com a nota "+ filme1.nota)
console.log("O segundo filme é "+ filme2.nome +" com a nota "+ filme2.nota)

if(filme1.nota > filme2.nota){
    console.log("O filme "+ filme1.nome +" tem a maior nota")
} else if(filme2.nota == filme1.nota) {
    console.log("Os filmes "+ filme1.nome +" e "+ filme2.nome +" tem notas iguais")
} else {
    console.log("O filme "+ filme2.nome +" tem a maior nota")
}