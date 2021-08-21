// 1 Map retorno um novo array sem alterar o array original
const alunas = ["Paula", "Maria", "Estela","Clara"]

alunas.map(alunas => console.log(alunas))

//Filter: retorna um novo array com elementos filtrados

const numeros = [34, 35, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(`Numeros Impares: ${numerosImpares}`)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(`Numeros Pares: ${numerosPares}`)

// Find encontra e retorna o primeiro elemento  que achar igual 
//ao elemento passado por parametro
const produtos = ["Ps5", "Computador", "cama", "Geladeira"]

const encontraPS5 = produtos.find(produto => produto == "Ps5")
console.log(encontraPS5)

//Sort - Ordena o array

const num = [34, 56, 85, 89, 195]
const crescente = num.sort((a,b) => a-b)
console.log(crescente)

const decrescente = num.sort((a,b) => b-a)
console.log(decrescente)

//Reduce  - reduz nosso array a um resultado de uma operação matemática

const numbers = [981, 384, 3775]

const soma = numbers.reduce((valorAnterior,valorAtual) =>
{
    return valorAnterior + valorAtual
})
//5140
console.log(soma)





