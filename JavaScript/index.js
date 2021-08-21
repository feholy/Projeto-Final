function calculaMedia(nota1, nota2, nota3)
{
    let media = (nota1 + nota2 + nota3)/3

    if(media >= 7)
    {
        return 'aprovado'
    }

    if(media >= 5 && media < 7)
    {
        return 'recuperação'
    }

    if (media < 5)
    {
        return 'Reprovado'
    }
}

console.log(calculaMedia(1,2,2))