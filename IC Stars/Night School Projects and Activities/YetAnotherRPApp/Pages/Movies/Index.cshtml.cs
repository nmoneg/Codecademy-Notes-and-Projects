using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using YetAnotherRPApp.Data;
using YetAnotherRPApp.Models;

namespace YetAnotherRPApp.Pages.Movies
{
    public class IndexModel : PageModel
    {
        private readonly YetAnotherRPApp.Data.YetAnotherRPAppContext _context;

        public IndexModel(YetAnotherRPApp.Data.YetAnotherRPAppContext context)
        {
            _context = context;
        }

        public IList<Movie> Movie { get;set; }

        public async Task OnGetAsync()
        {
            Movie = await _context.Movie.ToListAsync();
        }
    }
}
