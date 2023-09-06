const nome = prompt('Para começar, por favor, digite seu nome:');

const msgArea = prompt('Informe qual área deseja seguir Front-End ou Back-End?');
let linguagem = '';
validaAreaEscolhida();

const areaDev = prompt(`Gostaria de saber agora, se você gostaria de seguir se especializando em ${linguagem} ou se deseja seguir carreira como FullStack? Digite 1 - ${linguagem} || 2 - FullStack`);
validaAreaEspecializacao();

escolhaTecnologiaNova();


function validaAreaEscolhida(){
    if(msgArea == 'front-end'){
        linguagem = prompt( `Legal, já que escolheu ${linguagem}, gostaria de aprender React ou Vue?`);
    }
    else if (msgArea == 'back-end'){
        linguagem = prompt( `Legal, já que escolheu ${linguagem}, gostaria de aprender C# ou Java?`);
    }
    else{
        alert('A área digitada é inválida. Por favor, digite uma área válida!');
        // return validaAreaEscolhida();
    }
}

function validaAreaEspecializacao(){
    if(areaDev == 1){
        alert(`O caminho para o sucesso é sempre estudar, continue se especializando em ${linguagem} para que em um futuro próximo, você cosiga dominar a área de ${areaDev}`);
    }
    else if(areaDev == 2){
        alert(`Muito bem, chegou o momento de começar a explorar outras linguagens além de ${linguagem} para que você cosiga se tornar um desenvolvedor FullStack!`);
    }
    else{
        alert('Hmmm... Algo não está certo :/ O valor escolhido não é válido.');
    }
}

function escolhaTecnologiaNova(){
    let msgTecnologia = prompt('Para finalizar o nosso questionamento, gostaria de saber se existe outra tecnologia que você gostaria de aprender? Se existe, digite "sim" para que seja adicionada a lista');

    while(msgTecnologia == 'sim'){
        let addNovaTecnologia = prompt('Digite:');
        let listaTec = '';
        alert(`${addNovaTecnologia} é bem interessante para ser estudada.`)
        msgTecnologia = prompt('Tem mais alguma outra tecnologia que deseja estudar? Digite "sim" se houver.')
        listaTec = addNovaTecnologia++;
        alert(`Essas são as tecnologias que você deseja conhecer: ${listaTec}`)
    }
}