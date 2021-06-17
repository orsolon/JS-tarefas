//questão1

const pais = "Brasil";
const continente = "America do Sul";
let populacao = 213;

console.log(pais, continente, populacao);

//questao2

const isIlha = false;
const idioma = 'portugues';
console.log("O tipo de isIlha é: "+ typeof isIlha);
console.log("O tipo de idioma é: "+ typeof idioma);
console.log("O tipo de pais é: "+ typeof pais);
console.log("O tipo de continente é: "+ typeof continente);
console.log("O tipo de populacao é: "+ typeof populacao);

//questao3

//questao4

let metadePopolacao = populacao/2;
console.log(metadePopolacao);

let populacaoMais = populacao + 1;
console.log(populacaoMais);

let populacaoFinlandia = 6;
let res1 = populacao > populacaoFinlandia ? "Sim, O Brasil tem mais pessoas" : "Não, O Brasil não tem mais pessoas" ;
console.log(res1);

let mediaPaises = 33;
let res2 = populacao > mediaPaises ? "Brasil tem mais que a média" : "Brasil tem menos que a media";
console.log(res2);

const descricao =  `O ${pais} fica ${continente} e sua população é de ${populacao} milhões de pessoas que falam ${idioma}.`
console.log(descricao);

//questao 5

//questao 6

//questao 7

let questao1 = '9' - '5';
let questao2 = '19' - '13' + '17';
let questao3 = '19' - '13' + 17;
let questao4 = '123' < 57;
let questao5 = 5 + 6 + '4' + 9 - 4 - 2;

console.log(questao1);
console.log(questao2);
console.log(questao3);
console.log(questao4);
console.log(questao5);

//questão 8

let numVizinhos = console.log(Number(prompt('Quantos países vizinhos o seu país tem?')));
if (numVizinhos === 1) {
    console.log('Apenas 1 fronteira!');
} else if (numVizinhos > 1){
    console.log('Mais de 1 fronteira!' );
} else {
    console.log('Sem fronteiras!');
}

//questão9

if (idioma === "ingles" && populacao < 50 && isIlha == false) {
    console.log('Você deveria morar no Brasil')
} else {
    console.log('Brasil não satisfaz seus critérios :(')
}

//questao 10

switch (idioma) {
    case 'chines':
    case 'mandarim':
      console.log('Maior número de falantes nativos!');
      break;
    case 'espanhol':
      console.log('Segundo lugar em número de falantes nativos');
      break;
    case 'ingles':
    console.log('Terceiro lugar');
        break;
    case 'hindi':
    console.log('Quarto');
        break;
    case 'arabe':
    console.log('Quinto idioma mais falado');
        break;
    default:
      console.log('Ótimo idioma também :D');
  }

  //questão 11

  let populacaoBrasil = populacao > mediaPaises ? "acima" : "abaixo"
  console.log(`A população do Brasil é ${populacaoBrasil} da média`)
  