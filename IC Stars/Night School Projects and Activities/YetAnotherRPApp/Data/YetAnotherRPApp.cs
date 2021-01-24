using Microsoft.EntityFrameworkCore;

namespace YetAnotherRPApp.Data
{
    public class YetAnotherRPAppContext : DbContext
    {
        public YetAnotherRPAppContext (
            DbContextOptions<YetAnotherRPAppContext> options)
            : base(options)
        {
        }

        public DbSet<YetAnotherRPApp.Models.Movie> Movie { get; set; }
    }
}