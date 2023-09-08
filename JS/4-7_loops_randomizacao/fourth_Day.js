const numSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let numChute = '';
let acertou = false;


for (let i = 0; i < 3; i++){
    numChute = prompt('Digite um número de 0 a 10');
    
    if(numChute == numSecreto){
        alert(`Parabéns, você acertou! O número secreto era: ${numChute}`);
        acertou = true;
        break
    }
    alert(`O número que você digitou esta errado.`)    
}
if(acertou){
    alert(`Não foi dessa vez :( O número secreto era: ${numChute}`)
}


