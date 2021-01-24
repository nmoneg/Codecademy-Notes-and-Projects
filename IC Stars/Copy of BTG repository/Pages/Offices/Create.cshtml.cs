using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using RTWPortal.Data;
using RTWPortal.Models;

namespace RTWPortal.Pages.Offices
{
    public class CreateModel : PageModel
    {
        private readonly RTWPortal.Data.OfficeContext _context;

        public CreateModel(RTWPortal.Data.OfficeContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Office Office { get; set; }

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Office.Add(Office);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
