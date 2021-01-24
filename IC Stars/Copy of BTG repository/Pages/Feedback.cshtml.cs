using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace RTWPortal.Pages
{
    public class FeedbackModel : PageModel
    {
        private readonly ILogger<FeedbackModel> _logger;

        public FeedbackModel(ILogger<FeedbackModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
