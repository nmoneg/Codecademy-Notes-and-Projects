using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RTWPortal.Data;
using RTWPortal.Models;

namespace RTWPortal.Pages.Nonadmin
{
    public class IndexModel : PageModel
    {
        private readonly RTWPortal.Data.NonadminContext _context;

        public IndexModel(RTWPortal.Data.NonadminContext context)
        {
            _context = context;
        }

        public IList<Office> Office { get;set; }

        public async Task OnGetAsync()
        {
            Office = await _context.Office.ToListAsync();
        }
    }
}
