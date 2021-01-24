using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace RTWPortal.Pages
{
    public class AdminTwoModel : PageModel
    {
        private readonly ILogger<AdminTwoModel> _logger;

        public AdminTwoModel(ILogger<AdminTwoModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
