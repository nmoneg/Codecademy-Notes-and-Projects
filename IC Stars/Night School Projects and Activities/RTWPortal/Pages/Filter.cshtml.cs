using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace RTWPortal.Pages
{
    public class FilterModel : PageModel
    {
        private readonly ILogger<FilterModel> _logger;

        public FilterModel(ILogger<FilterModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
