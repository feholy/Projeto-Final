using aec_webapi_entity_framework.Models;
using Microsoft.EntityFrameworkCore;

namespace aec_mvc_webapi_framework.Servicos
{
    public class DbContexto : DbContext
    {
        public DbContexto(DbContextOptions<DbContexto> options) : base(options) { }

        public DbSet<Carro> Carros { get; set; }
        public DbSet<Marca>Marcas { get; set; }
    }
}
