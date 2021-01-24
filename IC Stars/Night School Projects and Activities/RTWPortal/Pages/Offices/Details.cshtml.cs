using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using RTWPortal.Data;
using RTWPortal.Models;

namespace RTWPortal.Pages.Offices
{
    public class DetailsModel : PageModel
    {
        private readonly RTWPortal.Data.OfficeContext _context;

        public DetailsModel(RTWPortal.Data.OfficeContext context)
        {
            _context = context;
        }

        public Office Office { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Office = await _context.Offices.FirstOrDefaultAsync(m => m.ID == id);

            if (Office == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
