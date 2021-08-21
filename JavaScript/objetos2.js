const filmes = [
    {
        titulo: "dilema das redes",
        id: 1,
        descrição: "Um documentário sobre tecnologia",
        duração: 120
    },

    {
        titulo: "Us",
        id: 2,
        descrição: "Terror",
        duração: 120
    },

    {
        titulo: "Corra",
        id: 3,
        descrição: "suspense",
        duração: 120
    }
]

const [{ titulo, id, descrição, duração}] = filmes

filmes.map(filme => console.log(filme.titulo))
