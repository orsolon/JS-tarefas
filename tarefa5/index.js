// questão 1

// a) são aquelas que não produzem nenhum efeito colateral, para um mesmo input tenho o mesmo output e não recebem variáveis de efeito global.

// b) não é pura pois recebe variavel "a" global...e temm o efeito colateral console.log
// uma função pura seria:

function soma(a,b) {
	return a + b
}

console.log(soma(5,2)) // imprime 7

// c) efeito colateral é qualquer alteração no estado da aplicação 
// que seja percebida fora do escopo da função chamada. 

// d) Neste Caso, podemos observar que a função está alterando atraves do metodo splice 
// a variavel arr que está fora do seu escopo, o que a torna impura e com efeitos colaterias.

// e) Esse tipo de  abordagem em grandes aplicações pode ser  vantajosa, pois 
// lendo o código, você pode ter a certeza de que o valor da variável naquele ponto será sempre aquele, 
// e que, se em algum momento for necessário um outro valor, uma nova variável será criada para isso. 
// Isso nos traz uma maior previsibilidade do que está acontecendo e maior facilidade para debugar.

//questão 3

// Escreva uma função que receba um array 'arr' e retorne outra função que:

// receba um array 'arr2'
// junte os elementos dos 2 arrays em um novo array
// retorne o novo array
// Execute a função de alta ordem e mostre no console o novo array.

// TEST DATA: arr = [42, 454, 21], arr2 = [4,6,2,4]

arr = [42, 454, 21]
arr2 = [4,6,2,4]

// const concatArr = function (arr) {
//     return function (arr2){
//         return arr.concat(arr2);
//     }
// }

const concatArr = (arr) => (arr2) => arr.concat(arr2);

console.log(concatArr(arr)(arr2));

//questao 4
// a) Escreva uma função somar que receba dois números e calcule a soma entre eles. Retorne o resultado da soma.

// b) Escreva uma função calcularMedia que receba dois números e calcule a média entre eles. Retorne o resultado da média.

// c) Escreva uma função subtrair que receba dois números e calcule a subtração entre eles. Retorne o resultado da subtração.

// d) Escreva uma função multiplicar que receba dois números e calcule a multiplicação entre eles. Retorne o resultado da multiplicação.

// e) Escreva uma função dividir que receba dois números e calcule a divisão entre eles. Retorne o resultado da divisão.

// f) Escreva uma função nomeada realizarOperacao que receba de parâmetro dois números x e y e uma função fn. Retorne na função realizarOperacao fn aplicada em x e y.

// Teste a função realizarOperacao passando por parâmetro cada uma das funções criadas (somar, calcularMedia, subtrair, multiplicar, dividir). Mostre o resultado no console de cada uma das operações.

const somar = (a, b) => a + b;
console.log("Adição:"+ somar(20,10));

const calcularMedia = (a,b) => ((a+b)/2);
console.log("Media:"+ calcularMedia(20,10));

const subtrair = (a, b) => a - b;
console.log("Subtração:"+subtrair(20,10));

const multiplicar = (a, b) => a * b;
console.log("Multiplicação:"+ multiplicar(20,10));

const dividir = (a, b) => a / b;
console.log("Divisão:"+ dividir(20,10));


const realizarOperacao = function(a,b, fn){
   return fn
}

console.log(realizarOperacao(2,2, somar));
console.log(realizarOperacao(2,2, calcularMedia ));
console.log(realizarOperacao(2,2, subtrair ));
console.log(realizarOperacao(2,2, multiplicar ));
console.log(realizarOperacao(2,2, dividir ));


// questão5

// Faça uma função recursiva que receba um número n 
// e calcule o número n da sequência de Fibonacci.
// 1,1,2,3,5,8,13,21,34,55...

function fibo(n) {
    if (n <= 1) {           // primeira iteração => 1
        return n;
    } else {
        return fibo(n-1) + fibo(n-2);   //segunda 0 + 1 => 1
    }                                   // terceira 1 + 1 => 2
}

console.log("sequência de Fibonacci: " + fibo(8));




// questão 6
// Faça uma função que receba um array X de números e 
// retorne outro array Y com os elementos de X multiplicados por 2.

const x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const multiplica = function(n){
    return n * 2;
}
const y = x.map(multiplica);
console.log(y);

// questão7

// Faça uma função que receba um array X de strings e uma letra. 
// A função deve retornar outro array Y com os elementos de X que começam com a letra recebida 
// por parâmetro.

// Exemplo: palavrasIniciandoCom(["cadeira", "mesa", "madeira", "porta", "sofá", "mala"], "m") => ["mesa", "madeira", "mala"].

const words = ["cadeira", "mesa", "madeira", "porta", "sofá", "mala"];
const letter = "m"

const palavrasIniciandoCom = words.filter(function(item){
    return item.charAt(0) == letter;
});
console.log(palavrasIniciandoCom);

// questão8

// Escreva uma função que receba um array X de números e retorne um novo array Y 
// apenas com os elementos positivos, pares e maiores do que 50 do array X.

const numeros = [70, 21, 30, 45, 63, -7, 120, 83, -91, 204];
const newnumeros = numeros.filter(function(n){
    return n>0 && n>50 && !(n % 2);
});

console.log("elementos positivos, pares e maiores: " + newnumeros);

//questao 9

// Crie uma função calcIdadeHumanaMedia que receba um array de idade de cães e faça as seguintes operações, em ordem:

// Calcule a idade do cão em anos humanos usando a seguinte fórmula:
// -se o cão tiver idade menor ou igual a 2 anos => 2 * idadeCao.

// -se o cão tiver idade maior que 2 anos => 16 + idadeCao * 4.

// Exclua todos os cães que tem menos que 18 anos em idade humana (o que é o mesmo que permanecer com os cães que tem pelo menos 18 anos).

// Calcule a média de idade humana de todos os cães adultos.

// Execute a função para os seguintes datasets:


const dogsAge1 =  [5, 2, 4, 1, 15, 8, 3];

const dogsAge2 = [16, 6, 10, 5, 6, 1, 4];

const calcIdadeHumanaMedia = dogsAge1
    .filter(age => age <=2)  
    .map(age => age * 2);

// const calcIdadeHumanaMedia= function (dogsAge) { 
//        dogsAge.forEach(function(age){
//             age.filter(age <=2)
//             .map(age => age * 2)
//             age.filter(age > 2)
//             .map(age => 16 + age * 4)
//             .filter(age > 18)
//        });
       
//     }

// console.log(calcIdadeHumanaMedia());


//questao 10

// Escreva uma função que receba o array de objetos abaixo e adicione uma propriedade chamada melhoresNotas em cada objeto. 
// Essa propriedade conterá todas as notas maiores que 70 do aluno, acrescidas de 10 pontos extras.

const aluno1 = {
    nome: 'Fulano',
    idade: 20,
    cpf: '123.545.323-43',
    cidade: 'São Paulo',
    notas: [70, 80, 90, 50, 75, 60]
};

const aluno2 = {
    nome: 'Cicrano',
    idade: 40,
    cpf: '123.343.213-35',
    cidade: 'Recife',
    notas: [60, 60, 30, 20, 60, 100]
};

const aluno3 = {
    nome: 'Beltrano',
    idade: 15,
    cpf: '433.554.533-54',
    cidade: 'Acre',
    notas: [65, 45, 73, 90, 95, 78]  
};

const alunos = [aluno1, aluno2, aluno3];

const melhoresNotas = function (melhoresNotas) { 
    melhoresNotas.forEach(function (nota) { 
        nota.melhores = nota.notas
        .filter(nota => nota>70)
        .map(nota => nota+10)
    });
}

melhoresNotas(alunos);
console.log(alunos);



