function subtrair(num1, num2){ // Parametros 
    console.log("A subtração é: ")
    return num1 - num2
}
console.log(subtrair(10, 3)); // Argumentos
console.log("*************************************\n");

function multiplicar(num1, num2){
    console.log("Aa multiplicação é: ")
    return num1 * num2
}
console.log(multiplicar(4, 5));
console.log("*************************************\n");

function dividir(num1, num2) {
    if (num2 === 0) {
        return "Não é possível dividir por zero."        
    }
    console.log("A divisão é: ")
    return num1 / num2    
}
console.log(dividir(20, 0));
console.log("*************************************\n");

function dobro(num) {
    console.log("Calculando o dobro: ")
    return num * 2    
}
console.log(dobro(5));
console.log("*************************************\n");

function maiorNum(num1, num2) {
    console.log("O maior número é: ")
    if (num1 > num2) {
        return num1
    }else{
        return num2 
    }    
}
console.log(maiorNum(15, 60));
console.log("*************************************\n");

function parImpar(num) {
    console.log("O número é: ")
    if (num % 2 === 0) {
        return "Par"
    }else{
        return "Ímpar"
    }    
}
console.log(parImpar(91));
console.log("*************************************\n");

function saudacao(nome) {
    return `Olá boa noite, ${nome}! Seja bem vindo!`
}
console.log(saudacao("Luan"));
console.log("*************************************\n");

function calcularIdade(anoNascimento) {
    console.log("A idade é: ")
    let anoAtual = 2026
    return anoAtual - anoNascimento    
}
console.log(calcularIdade(1991));
console.log("*************************************\n");

function verificarAprovacao(mediaAluno) {
    console.log("O aluno está: ")
    if(mediaAluno >= 7){
        return "Aprovado."
    }else if(mediaAluno >= 5){
        return "de recuperação."
    }else{
        return "Reprovado."
    }
}
console.log(verificarAprovacao(9));
console.log("*************************************\n");

function tabuada(numero){
    console.log("Resultado da Tabuada: ")
    for(let cont = 1; cont <= 10; cont++){
        console.log(`${numero} X ${cont} = ${numero * cont} `)
    }
}
tabuada(5);
