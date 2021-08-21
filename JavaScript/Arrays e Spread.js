const alunasGama = ["Paula", "Maria", "Estela","Clara"]

//acessar informações no array
console.log(alunasGama[3])//Clara

//operador spread(...)

const alunasXp = [...alunasGama, "Simara"]

console.log(alunasXp)

//metodos de interação

for(let i = 0; i < alunasXp.length; i++)
{
    console.log(alunasXp[i])
}