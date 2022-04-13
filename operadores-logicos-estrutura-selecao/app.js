const readLine = require('readline').createInterface({
    input: process.stdin,
    input: process.stdout
});

console.log('Esse programa vai checar se vc é maior de 18 anos e tem habilitação pra saber se você pode entrar no Kart');
console.log('Além de suas verificações, precisamos verificar se você está na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if (ano > 2004) {
        console.log('Você tem 18 anos');

    } else {
        readLine.question('Você tem habilitação? (sim/não)', temHabilitação => {
            if (!(temHabilitação.toUpperCase() === "sim")) {
                console.log('Você não tem habilitação para entrar no Kart');
            }else{
                readLine.question('Qual seu nome?', nome => {
                    switch (nome) {
                        case 'Jeovahny':
                            console.log('bem vindo ao Kart Jeovahny');
                            break
                        case 'Rafael':
                            console.log('Bem vindo ao Kart Rafael');
                            break
                        default:
                            console.log('Seu nome não foi identificado na lista de presença')
                    }
                })
            }
        }) 
    }
})