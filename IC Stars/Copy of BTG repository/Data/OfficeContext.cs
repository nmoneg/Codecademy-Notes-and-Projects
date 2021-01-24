using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RTWPortal.Models;

namespace RTWPortal.Data
{
    public class OfficeContext : DbContext
    {
        public OfficeContext (DbContextOptions<OfficeContext> options)
            : base(options)
        {
        }

        public DbSet<RTWPortal.Models.Office> Office { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Admin> Admins { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Office>().ToTable("Office");
            modelBuilder.Entity<Employee>().ToTable("Employee");
            modelBuilder.Entity<Admin>().ToTable("Admin");
        }
    }
}
