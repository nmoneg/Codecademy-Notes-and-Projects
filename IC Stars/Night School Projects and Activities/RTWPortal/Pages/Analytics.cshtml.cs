using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace RTWPortal.Pages
{
    public class AnalyticsModel : PageModel
    {
        private readonly ILogger<AnalyticsModel> _logger;

        public AnalyticsModel(ILogger<AnalyticsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
