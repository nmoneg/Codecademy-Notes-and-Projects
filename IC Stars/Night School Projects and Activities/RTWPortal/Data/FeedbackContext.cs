using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RTWPortal.Models;

namespace RTWPortal.Data
{
    public class FeedbackContext : DbContext
    {
        public FeedbackContext (DbContextOptions<FeedbackContext> options)
            : base(options)
        {
        }

        public DbSet<RTWPortal.Models.Feedback> Feedback { get; set; }
    }
}
