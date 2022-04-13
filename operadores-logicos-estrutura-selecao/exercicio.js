const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce foi convidado? (Sim/Nao) ", foiConvidado => {
            if(!(foiConvidado.toUpperCase() === "SIM")){
                console.log('Voce não está na lista de convidados');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo a festa Douglas');
                            break;
                        case 'Rafael' :
                            console.log('bem vindo a festa Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');
                    }
                });
            }
        })
    }
}) 

    

