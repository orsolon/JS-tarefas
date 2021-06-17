

function listarComidas(){
    const frutas = ["Maçã", "Mamão", "Melão", "Banana"];
    const vegetais = ["Cenoura", "Couve", "Brócolis", "Alface"];
    //a) Remova o primeiro item do array de vegetais
    vegetais.shift();
    console.log(vegetais);
    //b) Remova o último item do array de frutas
    frutas.pop();
    console.log(frutas);
    //c) Encontre a posição de Mamão no array de frutas
    console.log(frutas.indexOf('Mamão'));
    //d) Adicione o número encontrado na letra c no começo do array de frutas
    const adicionar = frutas.indexOf('Mamão');
    frutas.unshift(adicionar);
    console.log(frutas);
    //e) Use a propriedade length para encontrar o tamanho do array de frutas
    console.log(frutas.length);
    //f) Adicione o número encontrado na letra e no final do array de frutas.
    const adicionarFinal = frutas.length;
    frutas.push(adicionarFinal);
    console.log(frutas);
    //g) Junte esses dois arrays em um só. Vegetais primeiro. Chame o novo array de comidas.
    const comidas = [...vegetais,...frutas];
    console.log(comidas);
    //h) Atribua 3 elementos do seu novo array a outro array chamado melhoresComidas começando do index 2.
    const melhoresComidas = comidas.slice(2,5);
    console.log(melhoresComidas);
    //i) Verifique com um método se o elemento "Maçã" existe no array melhoresComidas. Se não existe, mostre no console a mensagem "Maçã não é uma das melhores comidas".Se existe, mostre no console: "Maçã é uma das melhores comidas".
    let maca = melhoresComidas.includes('Maçã') ? "Maçã é uma das melhores comidas" : "Maçã não é uma das melhores comidas";
   console.log(maca);
   //j) Reverta o array melhoresComidas.
   console.log(melhoresComidas.reverse());
   //k) Retorne o array melhoresComidas na função.
    return melhoresComidas;
}


listarComidas();

/*
Escreva uma função anônima que receba o array filmes abaixo e cada elemento do array livros:

const filmes = ["Piratas do Caribe", "Crepúsculo", "Harry Potter", "O Senhor dos Anéis", "Star Wars", "O Dia do Terror"];
const livros = ["Crepúsculo", "Harry Potter", "Star Wars", "Gossip Girl"];
A função deve verificar se cada elemento do array de livros existe no array de filmes. Se todos os livros do array estiverem contidos no array de filmes, mostre no console a mensagem "Existe filme para todos os livros!". Senão, retorne o array de livros e o array de filmes concatenados.

OBS: A função deve receber os livros elemento a elemento, não o array inteiro. Use o operador Spread para passar os elementos do array de livros na função.

*/

const filmes = ["Piratas do Caribe", "Crepúsculo", "Harry Potter", "O Senhor dos Anéis", "Star Wars", "O Dia do Terror"];
const livros = ["Crepúsculo", "Harry Potter", "Star Wars", "Gossip Girl"];

let show = function () {
    
    const [ book1, book2, book3, book4 ] = livros;

    const x = filmes.includes(book1);
    const y = filmes.includes(book2);
    const z = filmes.includes(book3);
    const w = filmes.includes(book4);
    console.log(x, y, z, w);

    let juntar = [...filmes, ...livros];

    let listar = x && y && z && w == true ? "Existe filme para todos os livros!" : juntar ;
    console.log(listar);

};

show();