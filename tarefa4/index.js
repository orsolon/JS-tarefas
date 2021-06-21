// questão1

// Faça uma função que receba um array e retorne o resultado da multiplicação de todos os seus elementos. 
// Exemplo: multiplyArray([1,2,3]) => 6


function multiplyArray(n){
    let res = 1;
    for (let i=0; i < n.length; i++){           //
        res*= n[i];
    }
    return res;
}

console.log(multiplyArray([1,2,3]));



// questão 2

// Faça uma função que receba uma string e uma letra. 
// A função deve tornar maiúscula todas as letras da string igual a letra recebida como parâmetro na função. 
// Retorne na função a string modificada. 
// Exemplo: turnUpperCase('paralelepipedo', 'p') => 'ParalelePiPedo'

function turnUpperCase(str, letter){
    let newStr = '';
    for (let i=0; i< str.length; i++) {
        // console.log(str[i])
        if (str[i] == letter) {
            newStr += str[i].toUpperCase();
            // console.log(newStr);
        } else {
            newStr += str[i]
        } 
    }
    return newStr;
}

console.log(turnUpperCase('paralelepipedo', 'p'));



// questao 3

// Escreva uma função calcMediaAlunos para calcular a média das notas dos alunos de uma escola. Essa função deve receber dois parâmetros: alunos e notas.

// Obs: A função deve funcionar para qualquer número de alunos passados.

// a) Mostre no console as seguintes mensagens para cada aluno:

// 'Soma das notas do aluno X: {valor da soma das notas do aluno X}'

// 'Média das notas do aluno X: {média do aluno X}'

// 'Soma das notas do aluno Y: {valor da soma das notas do aluno Y}'

// 'Média das notas do aluno Y: {média do aluno Y}'

// 'Soma das notas do aluno Z: {valor da soma das notas do aluno Z}'

// 'Média das notas do aluno Z: {média do aluno Z}'

// b) Se o aluno tiver média maior ou igual a 70, mostre a mensagem no console: 'O(a) aluno(a) {nome do aluno} passou por média!'. Se a média for inferior a 70, mostre no console: 'O(a) aluno(a) {nome do aluno} não passou por média.'

// c) Calcule e mostre no console a média da turma.

alunos = ["debora", "marina", "rodrigo"];
notas = [[10, 9,9], [5, 7, 6], [9,10,7]];

function calcMediaAlunos (alunos, notas) {
   
    let sum = [0,0,0];
    let average = [0,0,0]; 
    let averageClass = 0;
   
    for(let i=0; i<alunos.length; i++) {
       
        for (let j=0; j<notas[i].length; j++){
            sum[i] = sum[i] + notas[i][j];
        }
        console.log(`Soma das notas do aluno ${alunos[i]}: ${sum[i]}`);
        average = sum[i] / notas.length;
        console.log(`Média das notas do ${alunos[i]}: ${average.toFixed(2)}`)
        
        if (average > 7){
            console.log(`O Aluno ${alunos[i]} passou por média`);
        } else {
            console.log(`O Aluno ${alunos[i]} NÃO passou por média`);
        }

        averageClass += average;
        averageClass = average / alunos.length;
        console.log(`A Média da turma é: ${averageClass}`)
    }
     
    
    
}

calcMediaAlunos(alunos, notas);




// usando array
// deu certo assim
// peguei a variavel igual a tua de soma e no final do segundo for eu dou push dela no array sum
//ent vcs criaram uma variavel temporaria de soma que vai armazenar a soma do aluno e dps fazer push no array??



//questão 4
// Escreva uma função que recebe um inteiro positivo não nulo n < 20 e imprime um triângulo 
// eqüilátero formado apenas por símbolos de asterisco (“*" ) e de espaço (“ ”) como a seguir 
// (para n = 6):

//https://www.youtube.com/watch?v=5ZgPaodiXUM
