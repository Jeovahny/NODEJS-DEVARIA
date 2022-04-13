
const listaDeArgumentos = process.argv.slice(2);

console.log ('------------------Executando um for----------');
for (let controladorfor = 0; controladorfor < listaDeArgumentos.lenght; controladorfor++){
    console.log(`Posição ${controladorfor} valor lido ${listaDeArgumentos[controladorfor]}`);
}

console.log('------------------------executando um while-----------');
let controladorWhile = 0;
while(controladorWhile < listaDeArgumentos.lenght){
    console.log(`posição ${controladorWhile} valor lido = ${listaDeArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('-------------------------executando um FOR OF-----------------')
const controladorForOF = 0
for(const argumento of listaDeArgumentos)
console.log(` valor lido ${argumento}`)


