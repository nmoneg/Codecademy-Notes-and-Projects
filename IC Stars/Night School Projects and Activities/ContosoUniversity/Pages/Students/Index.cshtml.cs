using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ContosoUniversity.Data;
using ContosoUniversity.Models;

namespace ContosoUniversity.Pages.Students
{
    public class IndexModel : PageModel
    {
    private readonly SchoolContext _context;
    public IndexModel(SchoolContext context)
    {
        _context = context;
    }

    public string NameSort { get; set; }
    public string DateSort { get; set; }
    public string CurrentFilter { get; set; }
    public string CurrentSort { get; set; }

    public IList<Student> Students { get; set; }

    public async Task OnGetAsync(string sortOrder)
    {
        // using System;
        NameSort = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
        DateSort = sortOrder == "Date" ? "date_desc" : "Date";

        IQueryable<Student> studentsIQ = from s in _context.Students
                                        select s;

        switch (sortOrder)
        {
            case "name_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.LastName);
                break;
            case "Date":
                studentsIQ = studentsIQ.OrderBy(s => s.EnrollmentDate);
                break;
            case "date_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.EnrollmentDate);
                break;
            case "First Name":
                studentsIQ = studentsIQ.OrderBy(s => s.FirstMidName);
                break;
            case "first_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.FirstMidName);
                break;
            case "Office":
                studentsIQ = studentsIQ.OrderBy(s => s.Office);
                break;
            case "office_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.Office);
                break;
            case "Region":
                studentsIQ = studentsIQ.OrderBy(s => s.Region);
                break;
            case "region_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.Region);
                break;
            case "Status":
                studentsIQ = studentsIQ.OrderBy(s => s.Status);
                break;
            case "status_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.Status);
                break;
            case "Temperature":
                studentsIQ = studentsIQ.OrderBy(s => s.TemperatureCheck);
                break;
            case "temp_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.TemperatureCheck);
                break;
            case "Face Coverings":
                studentsIQ = studentsIQ.OrderBy(s => s.FaceCoverings);
                break;
            case "FC_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.FaceCoverings);
                break;
            case "Visitors":
                studentsIQ = studentsIQ.OrderBy(s => s.VisitorsAllowed);
                break;
            case "visitors_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.VisitorsAllowed);
                break;
            case "Login":
                studentsIQ = studentsIQ.OrderBy(s => s.LoginDate);
                break;
            case "login_desc":
                studentsIQ = studentsIQ.OrderByDescending(s => s.LoginDate);
                break;
            default:
                studentsIQ = studentsIQ.OrderBy(s => s.LastName);
                break;
        }

        Students = await studentsIQ.AsNoTracking().ToListAsync();
        }
    }
}
