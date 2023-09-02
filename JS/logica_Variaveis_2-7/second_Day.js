const nome = prompt("Por favor, digite seu nome: ")
let idade = prompt("Informe a sua idade: ")
const linguagem_Program = prompt("Qual linguagem de programação você esta estudando?")

const msg = `Olá ${nome}, você tem ${idade} anos e esta aprendendo ${linguagem_Program}`;
alert(msg)

let gosta_De_Estudar = prompt("Você gosta de estudar " + linguagem_Program + "? Responda com o número 1 para SIM ou 2 para NÃO")

if (gosta_De_Estudar == 1){
    alert ("Muito bom! Continue estudando e você terá muito sucesso")
}
else{
    prompt("Aah que pena..." + nome+ ", já tentou aprender outras linguagens?")
}