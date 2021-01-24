using Microsoft.EntityFrameworkCore;
using MvcPlayApp.Models;

namespace MvcPlayApp.Data
{
    public class MvcPlayAppContext : DbContext
    {
        public MvcPlayAppContext (DbContextOptions<MvcPlayAppContext> options)
            : base(options)
        {
        }

        public DbSet<Profile> Profile { get; set; }
    }
}