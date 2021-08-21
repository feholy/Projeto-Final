const pessoa = {
    nome: "Sakura",
    idade: "18",
    cidade: "Tomoeda"
}

//notação de ponto
console.log(pessoa.nome)//Sakura


//notação de colchetes

console.log(pessoa['idade'])

//como desestruturar objetos

const {nome, idade, cidade} = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)