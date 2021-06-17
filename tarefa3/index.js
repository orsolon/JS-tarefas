const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

/*
Essa matriz representa os dados de 4 alunos. Os dados são: 
nome, idade, linguagem de programação que está aprendendo e curso que está fazendo na Let's Code.
*/

//Mostre no console todos os dados da aluna Luciana.
console.log(alunos[3]);

//Mostre no console a idade da aluna Letícia.
console.log(alunos[1][1]);

//Modifique o curso do aluno Pedro de Mobile para Data Science.
alunos[2][3] = "Data science" ;
console.log(alunos);

/*
questão 2

Mostre no console a seguinte mensagem usando algum método de acesso ao objeto: 
"John Doe tem 30 anos de idade, é pardo, natural de Recife-PE e de nacionalidade brasileira."
*/

const pessoa = {
    primeiroNome: "John",
    segundoNome: "Doe",
    idade: 30,
    etnia: "pardo",
    naturalidade: "Recife-PE",
    nacionalidade: "brasileira"
};

console.log(`${pessoa.primeiroNome} ${pessoa.segundoNome} tem ${pessoa.idade} de idade, é ${pessoa.etnia}, natural de ${pessoa.naturalidade} e de nacionalidade ${pessoa.nacionalidade}.`)

// questão 3

// Crie um objeto chamado cachorro através de uma função construtora. 
// As propriedades desse objeto devem ser nome, apelido, raça, idade e isVacinado. 
// Ofereça um valor padrão para chaves inexistentes.


function Pet (nome, apelido, raca, idade, vacinado ) {
    this.nome = nome
    this.apelido = apelido || 'sem apelido',
    this.raca = raca || '',
    this.idade = idade || 'não conhecida',
    this.isVacinado = true || ''
}

const cachorro = new Pet('Bruce', 'Bru', "rottweiler", '', true);
console.log(cachorro);

// questão 4

// Implemente o valor da propriedade hasDesconto. Esse valor deve ser uma função que verifica se o preço do produto é maior do que 450, se for, retorna verdadeiro, senão, retorna falso. Tente usar o conceito de Truthy e Falsy nessa questão.

// Implemente o valor da propriedade calcularValorFinal. Esse valor deve ser uma função que calcula o valor total a pagar se houver desconto e se não houver desconto no produto. O valor do desconto é de 10% para cada produto com preço maior que 450. Use a propriedade hasDesconto para saber se há desconto. Retorne o preço final da venda (com ou sem desconto).

// Mostre no console a seguinte mensagem: [Amazon] - [ventilador Arno] - [5] - [Valor Total da Venda = ???]

const venda = {
    produto: "ventilador",
    marca: "Arno",
    loja: "Amazon",
    quantidade: 5,
    preco: 500,
    hasDesconto: function(preco){
        return preco > 450 ? true : false;
        
    },
    calcularValorFinal: function(hasDesconto) {
        return hasDesconto ? this.preco*(1 - 0.10)*this.quantidade : this.preco*this.quantidade;
        
    }
}

venda.calcularValorFinal();

console.log(`[${venda.loja}] [${venda.produto}] [${venda.marca}] [${venda.quantidade}] [${venda.calcularValorFinal()}]`);