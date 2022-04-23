let nome: string = 'Jeovahny Tavares'
console.log(nome)

//arrays

let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Papagaio']
console.log(animais)

//objetos

let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = {nome: 'Corsa Sedan', ano: 1997, preco: 11.000}
console.log(carro)

//functions

function multiplicarNumero(num1: number, num2: number) {
    return num1 * num2;
}

console.log(multiplicarNumero(3,5))