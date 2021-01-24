using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RTWPortal.Models
{
    public class Office
    {
        public int ID { get; set; }
        public string Office_Name { get; set; }
        public string Location_Type { get; set; }
        public string Status { get; set; }
        public string Services { get; set; }
        public string Market_Unit { get; set; }
        public string City { get; set; }
        public string Street_Address { get; set; }
        public string Zip_Code { get; set; }
        public string Dress_Code { get; set; }
        public string Tech_Support { get; set; }
        public string Additional_Info { get; set; }
        public string User_Count { get; set; }
        public string Visitors { get; set; }
        public string Special_Considerations { get; set; }
        public string Special_Consideration_Details { get; set; }
        public string Temp_Checks { get; set; }

        public ICollection<Admin> Admin { get; set; }
        public ICollection<Employee> Employee { get; set; }
    }
}