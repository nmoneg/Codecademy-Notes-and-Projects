using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RTWPortal.Models;

namespace RTWPortal.Data
{
    public class NonadminContext : DbContext
    {
        public NonadminContext (DbContextOptions<NonadminContext> options)
            : base(options)
        {
        }

        public DbSet<RTWPortal.Models.Office> Office { get; set; }
    }
}
