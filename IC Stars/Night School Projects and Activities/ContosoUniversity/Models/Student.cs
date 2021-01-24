using System;
using System.Collections.Generic;

namespace ContosoUniversity.Models
{
    public class Student
    {
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public string Office { get; set; }
        public string Region { get; set; }
        public string Status { get; set; }
        public string TemperatureCheck { get; set; }
        public string FaceCoverings { get; set; }
        public string VisitorsAllowed { get; set; }
        public DateTime LoginDate { get; set; }

        public ICollection<Enrollment> Enrollments { get; set; }
    }
}